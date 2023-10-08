from django.db.models import Q, Prefetch

from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response

from products.serializers import (
    ProductSerializer,
    MasterCategorySerializer,
)
from products.models import Product, MasterCategory, Category


class CategoriesView(ReadOnlyModelViewSet):
    authentication_classes = []
    pagination_class = None

    serializer_class = MasterCategorySerializer
    queryset = (
        MasterCategory.objects.prefetch_related(
            Prefetch("categories", queryset=Category.objects.filter(hidden=False))
        )
        .filter(categories__hidden=False)
        .distinct()
    )


class CategoriesDisplayView(ReadOnlyModelViewSet):
    authentication_classes = []
    pagination_class = None

    def list(self, request):
        queryset = (
            Category.objects.prefetch_related(
                Prefetch(
                    "products",
                    queryset=Product.objects.filter(
                        hidden=False,
                        image__contains=Product.PRODUCT_IMAGES_PATH,
                    ),
                    to_attr="filtered_products",
                )
            )
            .filter(
                hidden=False,
                products__hidden=False,
                products__image__contains=Product.PRODUCT_IMAGES_PATH,
            )
            .distinct()
        )

        data = []
        for category in queryset:
            data.append(
                {
                    "id": category.id,
                    "name": category.name,
                    "image": request.build_absolute_uri(
                        category.filtered_products[0].image.url
                    ),
                }
            )

        return Response(data)


class ProductsView(ReadOnlyModelViewSet):
    authentication_classes = []

    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        params = self.request.query_params

        search = params.get("search", None)
        categoryid = params.get("categoryid", None)
        mastercategoryid = params.get("mastercategoryid", None)

        query = Q(hidden=False) & Q(category__hidden=False)

        if search is not None:
            query &= (
                Q(name__icontains=search)
                | Q(brand__icontains=search)
                | Q(specs__icontains=search)
            )

        if categoryid is not None and categoryid.isnumeric():
            query &= Q(category=categoryid)
        if mastercategoryid is not None and mastercategoryid.isnumeric():
            query &= Q(category__master_category=mastercategoryid)

        return self.queryset.filter(query)


class ProductsCheckoutView(ReadOnlyModelViewSet):
    authentication_classes = []
    pagination_class = None

    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        params = self.request.query_params
        productids = params.get("productids", None)
        if productids is None:
            return None

        ids = productids.split(",")
        ids_query = Q()
        for productid in ids:
            if productid.isnumeric():
                ids_query |= Q(id=productid)

        query = Q(hidden=False) & Q(category__hidden=False) & ids_query

        return self.queryset.filter(query)

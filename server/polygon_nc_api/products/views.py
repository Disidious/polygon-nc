from django.db.models import Q

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import authentication, permissions

from products.serializers import ProductSerializer
from products.models import Product


class ProductsView(ModelViewSet):
    authentication_classes = []

    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        params = self.request.query_params

        search = params.get("search", None)
        category = params.get("category", None)

        query = Q()

        if search is not None:
            query = (
                query
                | Q(name__icontains=search)
                | Q(brand__icontains=search)
                | Q(part_number__icontains=search)
                | Q(specs__icontains=search)
            )

        if category is not None and category.isnumeric():
            query = query & Q(category=category)

        queryset = self.queryset
        query_set = queryset.filter(query)
        return query_set

from rest_framework import serializers

from quote_requests.models import QuoteRequest, RequestedProduct
from products.models import Product


class QuoteRequestProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestedProduct
        fields = [
            "quantity",
            "product",
        ]


class QuoteRequestSerializer(serializers.ModelSerializer):
    requested_products = QuoteRequestProductSerializer(many=True, allow_empty=False)

    class Meta:
        model = QuoteRequest
        fields = [
            "company_name",
            "first_name",
            "last_name",
            "email",
            "phone",
            "address",
            "message",
            "requested_products",
        ]

    def validate_requested_products(self, products_data):
        products_ids = [data["product"].id for data in products_data]

        if Product.objects.filter(id__in=products_ids).count() == 0:
            raise serializers.ValidationError("Products with these ids does not exist.")

        return products_data

    def create(self, validated_data):
        products_data = validated_data.pop("requested_products")
        quote_request = QuoteRequest.objects.create(**validated_data)
        requested_products = [
            RequestedProduct(
                quantity=data.get("quantity", 1),
                product=data["product"],
                quote_request=quote_request,
            )
            for data in products_data
        ]
        RequestedProduct.objects.bulk_create(requested_products)

        return quote_request

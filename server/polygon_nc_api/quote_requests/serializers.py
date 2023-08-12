from rest_framework import serializers

from quote_requests.models import QuoteRequest
from products.models import Product


class QuoteRequestProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()


class QuoteRequestSerializer(serializers.ModelSerializer):
    products = QuoteRequestProductSerializer(many=True, allow_empty=False)

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
            "products",
        ]

    def validate_products(self, products_data):
        products_ids = [data["id"] for data in products_data]

        if Product.objects.filter(id__in=products_ids).count() == 0:
            raise serializers.ValidationError("Products with these ids does not exist.")

        return products_data

    def create(self, validated_data):
        products_data = validated_data.pop("products")
        products_ids = [data["id"] for data in products_data]
        products = Product.objects.filter(id__in=products_ids)

        quote_request = QuoteRequest.objects.create(**validated_data)
        quote_request.products.add(*products)

        return quote_request

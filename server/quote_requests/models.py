from django.db import models

from products.models import Product
from quote_requests.validators import validate_requested_product_quantity


class QuoteRequest(models.Model):
    company_name = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    message = models.TextField(max_length=2000, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.first_name + " " + self.last_name


class RequestedProduct(models.Model):
    quantity = models.PositiveIntegerField(
        default=1,
        validators=[validate_requested_product_quantity],
        null=False,
        blank=False,
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quote_request = models.ForeignKey(
        QuoteRequest, on_delete=models.CASCADE, related_name="requested_products"
    )

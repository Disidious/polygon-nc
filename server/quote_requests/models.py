from django.db import models

from products.models import Product


class QuoteRequest(models.Model):
    company_name = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    message = models.TextField(max_length=2000, null=True, blank=True)
    products = models.ManyToManyField(Product, related_name="quote_requests")
    created_on = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.first_name + " " + self.last_name

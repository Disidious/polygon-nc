from django.db import models
from django.utils.translation import gettext_lazy as _

from products.validators import validate_image_extension


class MasterCategory(models.Model):
    class Meta:
        verbose_name_plural = " Master categories"

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    master_category = models.ForeignKey(
        MasterCategory,
        on_delete=models.SET_NULL,
        related_name="categories",
        null=True,
        blank=False,
    )
    name = models.CharField(max_length=100)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        related_name="products",
        null=True,
    )
    brand = models.CharField(max_length=100)
    name = models.CharField(
        _("Name / Part Number"),
        max_length=200,
    )
    image = models.ImageField(
        upload_to="product_images/",
        null=True,
    )
    specs = models.TextField(max_length=2000)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        return self.name

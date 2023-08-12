from django.db import models
from .validators import validate_image_extension


class MasterCategory(models.Model):
    class Meta:
        verbose_name_plural = "Master categories"

    name = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.name


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    master_category = models.ForeignKey(
        MasterCategory, on_delete=models.SET_NULL, null=True, blank=False
    )
    name = models.CharField(max_length=100, null=False, blank=False)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=False
    )
    brand = models.CharField(max_length=100, null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    image = models.FileField(
        upload_to="product_images/",
        validators=[validate_image_extension],
        null=True,
        blank=True,
    )
    part_number = models.CharField(max_length=100, null=False, blank=False)
    specs = models.TextField(max_length=2000, null=False, blank=False)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        return self.part_number + " / " + self.brand + " / " + self.name

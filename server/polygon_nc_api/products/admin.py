from django.contrib import admin
from products.models import *


@admin.register(MasterCategory)
class MasterCategoryAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]
    search_fields = ["id", "name"]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id", "master_category", "name", "hidden"]
    search_fields = ["id", "master_category", "name", "hidden"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "category",
        "brand",
        "name",
        "hidden",
    ]
    search_fields = [
        "id",
        "name",
        "category",
        "brand",
        "name",
        "specs",
        "hidden",
    ]

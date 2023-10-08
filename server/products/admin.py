from django.contrib import admin
from products.models import *


@admin.register(MasterCategory)
class MasterCategoryAdmin(admin.ModelAdmin):
    list_display = ["name"]
    list_display_links = ["name"]
    search_fields = ["id", "name"]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "master_category", "hidden"]
    list_display_links = ["name"]
    search_fields = ["id", "master_category", "name", "hidden"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "category",
        "brand",
        "name",
        "hidden",
    ]
    list_display_links = ["name"]
    list_filter = [
        "hidden",
        "category",
        "brand",
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

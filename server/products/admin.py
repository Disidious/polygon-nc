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
    search_fields = ["id", "name", "hidden"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "category",
        "brand",
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
        "brand",
        "specs",
        "hidden",
    ]

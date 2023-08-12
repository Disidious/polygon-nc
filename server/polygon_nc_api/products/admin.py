from django.contrib import admin
from .models import *


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
        "part_number",
        "category",
        "brand",
        "name",
        "hidden",
    ]
    search_fields = [
        "id",
        "part_number",
        "category",
        "brand",
        "name",
        "specs",
        "hidden",
    ]

from django.urls import path

from . import views

app_name = "products"

urlpatterns = [
    path("", views.ProductsView.as_view({"get": "list"})),
    path("categories/", views.CategoriesView.as_view({"get": "list"})),
]

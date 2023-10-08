from django.urls import path

from . import views

app_name = "products"

urlpatterns = [
    path("", views.ProductsView.as_view({"get": "list"})),
    path("checkout/", views.ProductsCheckoutView.as_view({"get": "list"})),
    path("<int:pk>/", views.ProductsView.as_view({"get": "retrieve"})),
    path("categories/", views.CategoriesView.as_view({"get": "list"})),
    path("categories/display/", views.CategoriesDisplayView.as_view({"get": "list"})),
]

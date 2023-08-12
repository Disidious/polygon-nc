from django.urls import path

from . import views

app_name = "products"

urlpatterns = [
    path("filter/", views.ProductsView.as_view({"get": "list"})),
]

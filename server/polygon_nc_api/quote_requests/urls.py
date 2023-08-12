from django.urls import path

from . import views

app_name = "quote_requests"

urlpatterns = [
    path("request/", views.QuoteRequestsView.as_view({"post": "create"})),
]

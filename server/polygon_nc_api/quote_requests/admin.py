from django.contrib import admin

from quote_requests.models import QuoteRequest


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "company_name",
        "first_name",
        "last_name",
        "email",
        "phone",
        "created_on",
    ]
    search_fields = [
        "id",
        "company_name",
        "first_name",
        "last_name",
        "email",
        "phone",
        "address",
        "message",
        "products",
        "created_on",
    ]
    readonly_fields = ["created_on"]
    filter_horizontal = ["products"]

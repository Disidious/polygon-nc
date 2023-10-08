from django.contrib import admin

from quote_requests.models import QuoteRequest, RequestedProduct


class RequestedProductInline(admin.TabularInline):
    model = RequestedProduct
    extra = 0


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = [
        "company_name",
        "first_name",
        "last_name",
        "email",
        "phone",
        "created_on",
    ]
    list_display_links = ["company_name"]
    search_fields = [
        "id",
        "company_name",
        "first_name",
        "last_name",
        "email",
        "phone",
        "address",
        "message",
        "created_on",
    ]
    readonly_fields = ["created_on"]
    inlines = [RequestedProductInline]

import os
from django.core.exceptions import ValidationError


def validate_requested_product_quantity(value):
    if value < 1:
        raise ValidationError("Quantity can't be less than 1.")

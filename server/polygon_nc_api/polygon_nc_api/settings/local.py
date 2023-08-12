from .base import *
import os

SECRET_KEY = "django-insecure-2_wt3a9!^)nc*l@fg783m2wk2yavyqq3vx^1@lw31ox$5d-@7b"

ALLOWED_HOSTS = ["*"]
DEBUG = True

CORS_ALLOW_ALL_ORIGINS = True

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "local.db.sqlite3",
    }
}

STATIC_ROOT = os.path.join(BASE_DIR, "static")
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

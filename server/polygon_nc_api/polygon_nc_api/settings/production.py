from .base import *
from .base import REST_FRAMEWORK
import environ
import os

env = environ.Env()
env.read_env(os.path.join(BASE_DIR, ".env"))

SECRET_KEY = env.str("DJANGO_SECRET")

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
DEBUG = False

STATIC_ROOT = os.path.join(env.str("ROOT_PATH"), "static")
MEDIA_ROOT = os.path.join(env.str("ROOT_PATH"), "media")

REST_FRAMEWORK = REST_FRAMEWORK.update(
    {"DEFAULT_RENDERER_CLASSES": ("rest_framework.renderers.JSONRenderer",)}
)

CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS")

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

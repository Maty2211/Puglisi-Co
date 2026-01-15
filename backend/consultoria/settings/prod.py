from .base import *
import os

DEBUG = False

ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "").split(",")

ALLOWED_HOSTS = [h.strip() for h in ALLOWED_HOSTS if h.strip()]

if not ALLOWED_HOSTS:
    ALLOWED_HOSTS = ["puglisi-co.onrender.com"]

CORS_ALLOWED_ORIGINS = [
    "https://puglisi-co-1.onrender.com",
]

CORS_ALLOW_CREDENTIALS = True


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("DB_NAME"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
        "HOST": os.getenv("DB_HOST"),
        "PORT": os.getenv("DB_PORT"),
    }
}


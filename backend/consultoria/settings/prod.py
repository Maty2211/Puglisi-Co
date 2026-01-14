import os
from .base import *

DEBUG = False

ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "").split(",")

ALLOWED_HOSTS = [h.strip() for h in ALLOWED_HOSTS if h.strip()]

if not ALLOWED_HOSTS:
    ALLOWED_HOSTS = ["puglisi-co.onrender.com"]

CORS_ALLOWED_ORIGINS = [
    "https://puglisi-co-frontend.onrender.com",
]

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


EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"

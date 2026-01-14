from .base import *

DEBUG = False

ALLOWED_HOSTS = ["tudominio.com"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "consultora",
        "USER": "consultora_user",
        "PASSWORD": "consultora123",
        "HOST": "localhost",
        "PORT": "5432",
    }
}

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"

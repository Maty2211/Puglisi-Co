from django.contrib import admin
from django.urls import path
from core.views import health, contact

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health),
    path("api/contact/", contact),
]

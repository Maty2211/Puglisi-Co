from django.contrib import admin
from django.urls import path
from core.views import contact, health

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/contact/", contact),
    path("api/health/", health),
]

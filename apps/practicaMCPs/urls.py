from django.urls import path
from . import views

urlpatterns = [
    path("email_mcp/", views.mcp_endpoint, name="mcp_endpoint"),
]
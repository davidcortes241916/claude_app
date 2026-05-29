from django.urls import path
from . import views

app_name = "core"

urlpatterns = [
    path('', views.home, name="inicio"),
    path('presidentes/', views.presidentes, name="presidentes"),
    path('api/presidente/', views.president_api, name="president_api"),
]

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from data import views
from django.views import generic

urlpatterns = [
    path('', views.home),
    path('backend/', views.index),
    path('api/ml/', include('machine_learning_model.urls')),
    path('api/data/', include('data.urls')),
]

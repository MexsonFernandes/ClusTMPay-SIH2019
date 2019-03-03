from django.contrib import admin
from django.urls import path, include
from machine_learning_model import views

urlpatterns = [
    path('', admin.site.urls),
    path('train', views.train),
    path('context', views.context),
    path('recommendation', views.recommendation),
    path('notification', views.notification),
    path('notification_email', views.notification_email)
]   
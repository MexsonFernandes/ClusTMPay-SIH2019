from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from data import views
from django.views import generic

urlpatterns = [
    path('backend/', admin.site.urls),
    path('api/app_activity/', include('user_behaviour_data.urls')),
    path('api/notification_activity/', include('notification_data.urls')),
    path('api/ml/', include('machine_learning_model.urls')),
    path('api/data/', include('data.urls')),
]

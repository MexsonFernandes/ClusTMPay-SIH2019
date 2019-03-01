from django.contrib import admin
from django.urls import path, include
from data import views

urlpatterns = [
    path('send_note', views.send_note),
    path('send_note_all', views.send_note_all),
    path('save_firebase_data', views.firebase)
]
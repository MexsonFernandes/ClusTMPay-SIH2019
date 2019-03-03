from django.contrib import admin
from django.urls import path, include
from data.views import home, send_note, send_note_all, firebase, postman_api, geolocation, export_to_csv

urlpatterns = [
	path('', home),
    path('send_note', send_note),
    path('send_note_all', send_note_all),
    path('save_firebase_data', firebase),
    path('postman_api', postman_api),
    path('geolocation', geolocation),
    path('csv', export_to_csv),
]
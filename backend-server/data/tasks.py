from configurations.celery import app
import os
from configurations.settings import database
from celery import task
from celery.schedules import crontab
from django.shortcuts import HttpResponse
from configurations.settings import database, auth, db
from pyfcm import FCMNotification
from .models import User

@app.task
def send_notification():
	try:
		# fetch user data
		users = db.collection(u'users').get()
		for user in users:
			instance, created = User.objects.get_or_create(email = user.id)
		if not created:
			instance.device_id = user.to_dict()['device-id'] 
		instance.save()
		# return HttpResponse("Done")
	except Exception as e:
		print(e)
		# return HttpResponse("Error: " + str(e))


app.conf.beat_schedule = {
    "send-notification": {
        "task": "data.tasks.send_notification",
        "schedule": crontab(minute="*/1")
    }
}

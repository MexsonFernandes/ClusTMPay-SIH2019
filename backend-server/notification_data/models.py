from django.db import models
# from data.models import Products
# Create your models here.

class Sent_Notification(models.Model):
    sent_time = models.DateTimeField()
    #product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500)
    body = models.CharField(max_length=1000)
    image = models.CharField(max_length=500)

class Received_Notification(models.Model):
    followed_time = models.DateTimeField()
    action = models.CharField(max_length=50)

    # user activity
    walking = models.CharField(max_length=10)
    onfoot = models.CharField(max_length=10)
    still = models.CharField(max_length=10)
    running = models.CharField(max_length=10)
    in_vehicle = models.CharField(max_length=10)
    on_bicycle = models.CharField(max_length=10)
    tilt = models.CharField(max_length=10)
    unknown_movement = models.CharField(max_length=10)
    screen_locked_unlocked = models.CharField(max_length=50)



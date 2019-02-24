from django.db import models

# Create your models here.


class DeviceActivity(models.Model):
    user = models.CharField(max_length=10)
    walking = models.CharField(max_length=10)
    onfoot = models.CharField(max_length=10)
    still = models.CharField(max_length=10)
    running = models.CharField(max_length=10)
    in_vehicle = models.CharField(max_length=10)
    on_bicycle = models.CharField(max_length=10)
    tilt = models.CharField(max_length=10)
    unknown_movement = models.CharField(max_length=10)
    screen_locked_unlocked = models.CharField(max_length=50)



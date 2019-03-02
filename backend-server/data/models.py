from django.db import models

# Create your models here.

class User(models.Model):
    email = models.CharField(max_length=100, unique=True)
    device_id = models.CharField(max_length=500)

class Products(models.Model):
    title = models.CharField(max_length=500)
    image = models.CharField(max_length=500)
    price = models.FloatField()
    category = models.CharField(max_length=300)
    

class GeoLocation(models.Model):
    lat = models.CharField(max_length=100)
    long = models.CharField(max_length=100)
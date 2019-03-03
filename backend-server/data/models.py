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
    email = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=500)


class Notification(models.Model):
    sent_time = models.CharField(max_length=500)
    receive_time = models.CharField(max_length=500)
    action_time = models.CharField(max_length=500)
    battery = models.CharField(max_length=5)
    action = models.CharField(max_length=20)
    latitude = models.CharField(max_length=50)
    longitude = models.CharField(max_length=50)
    phone_mode = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    message = models.CharField(max_length=100)
    image = models.BooleanField(default=False)


class Wishlist_product(models.Model):
    email = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=100)
    product = models.CharField(max_length=200)


class UserBehaviour(models.Model):
    email = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=100)
    product = models.CharField(max_length=200)


class SearchHistory(models.Model):
    email = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=100)
    query = models.CharField(max_length=200)


class AddedToCart(models.Model):
    email = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=100)
    product = models.CharField(max_length=200)



class PurchaseData(models.Model):
    email = models.CharField(max_length=100)
    timestamp = models.CharField(max_length=100)
    product = models.CharField(max_length=200)

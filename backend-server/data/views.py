from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse
from django.http import JsonResponse
from configurations.settings import database, auth, db, MEDIA_ROOT
from pyfcm import FCMNotification
from .models import User, Notification, Wishlist_product, UserBehaviour, SearchHistory, GeoLocation, AddedToCart, PurchaseData
from data.tasks import send_notification

push_service = FCMNotification(
                    api_key="AAAAuIvKSI0:APA91bFZ-eAVlKwN5R3txdjBiBSs3m6QB4pVEGo6CtFXEDJCfFR2pm7X_almIUiTPUrUdQ2lkGSN3FO04h1SC4I985Jcp4yP1-mNM77OSiFYq9TKd4dBJ57Wg7e3UMbciHqH_XX-NdWp"
                )        


def home(request):
    send_notification.delay()
    return redirect('/backend')

def index(request):
    text = """
    <h1>Django API urls at:<br/></h1>
    <a href="">api/data/send_note?email=8615101@apiit.edu.in</a> <br/>
    <a href="">api/data/send_note_all</a> <br/>
    <a href="">api/data/save_firebase_data</a> <br/>
    <a href="">api/data/postman_api?email=8615101@apiit.edu.in</a> <br/>
    <a href="">api/data/geolocation</a> <br/>
    <br/> <br/>
    <a href="">api/ml/</a>    
    """
    return HttpResponse(text)


def get_users_firebase(request):
    results = database.child("users").get()
    print(results.val())
    return HttpResponse("ge" + str(results.val()))


def save_users(request):
    # data to save
    data = {
        "name": "Mortimer 'Morty' Smith"
    } 
    
    return HttpResponse("save")

def send_note_all(request):
    try:
        registration_ids = []
        user = User.objects.all()
        emails = ""
        for i in user:
            registration_ids = registration_ids + [i.device_id]
            emails = emails + str(i.email) + "<br/>"
        message_title = "New service launch"
        message_body = "ClusTMPay has been promoted all over the world"
        result = push_service.notify_multiple_devices(registration_ids=registration_ids, message_title=message_title, message_body=message_body)
        print(result)
        return HttpResponse(emails + "Success: sent notification to " + str(len(user)) + " devices")
    except Exception as e:
        return HttpResponse("Error: " + str(e))


def geolocation(request):
    try:
        data = database.child('geolocation').child('8615101@apiit_edu_in').get().val()
        print(data)
        data = list(data.items())
        lan = max([data[i] for i in range(len(data))])[1]['lan']
        long = max([data[i] for i in range(len(data))])[1]['long']
        jso = {
            'lat': lan,
            'long': long
        }
        return JsonResponse(json.dumps(jso), safe=False)
    except Exception as e:
        return HttpResponse("Error: " + str(e))


def send_note(request):
    try:
        email = request.GET.get('email');
        message_title = "New service launch"
        message_body = "ClusTMPay has launched new merchandise store in town"
        registration_id = User.objects.filter(email=email).only('device_id')
        print(registration_id)
        registration_id = [i.device_id for i in registration_id]
        result = push_service.notify_single_device(registration_id=registration_id[0], message_title=message_title, message_body=message_body)
        print(result['results'][0]['message_id'])
        return HttpResponse("done " + str(email))
    except Exception as e:
        return HttpResponse("Error: " + str(e))


# create data in firebase - results = database.child("users").push(data)
# create user in firebase -  auth.create_user_with_email_and_password("robomex2020@gmail.com", "test123456")
import requests
import json
import time

def postman_api(request):
    try:
        email = request.GET.get('email');
        url = 'https://fcm.googleapis.com/fcm/send'
        registration_id = User.objects.filter(email=email).only('device_id')
        registration_id = [i.device_id for i in registration_id]

        print(registration_id[0])

        title = "huge discount on hoodies"
        message = "Visit hoodie store to awail the offer"
        image = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        i = Notification.objects.create(email=email, title=title, message=message, image=True, sent_time=str(int(time.time())))
        i.save()
        payload = {
                "data":{
                    "data" :{
                            "title": title,
                            "message": message,
                            "image": image,
                            "timestamp":"45777",
                            "id": i.id,
                            "payload":{}
                    }
                },
                "to": registration_id[0],
                "priority": "high"
                }
        headers = {
            'content-type': 'application/json',
            'Authorization': 'key=AAAAuIvKSI0:APA91bFZ-eAVlKwN5R3txdjBiBSs3m6QB4pVEGo6CtFXEDJCfFR2pm7X_almIUiTPUrUdQ2lkGSN3FO04h1SC4I985Jcp4yP1-mNM77OSiFYq9TKd4dBJ57Wg7e3UMbciHqH_XX-NdWp',
            'Accept': 'application/json'}
        r = requests.post(url=url, data=json.dumps(payload), headers=headers)

        
        print(r.text)
        return HttpResponse("Done")
    except Exception as e:
        return HttpResponse("Error: " + str(e))





def firebase(request):
    try:
        # fetch user data
        users = db.collection(u'users').get()
        for user in users:
            instance, created = User.objects.get_or_create(email = user.id)
            if not created:
                instance.device_id = user.to_dict()['device-id'] 
            instance.save()

        # notification data
        user = User.objects.all()
        # Notification.objects.all().delete()
        for u in user:
            try:
                data = database.child('sent_notification_activity').child(str(u.email).replace('.','_')).get().val()
                for keys, values in data.items():
                    instance, created = Notification.objects.get_or_create(id=keys)
                    if not created:
                        instance.receive_time = values['receive_time']
                        instance.action_time = values['action_time']
                        instance.battery = values['Battery']
                        instance.action = values['action']
                        instance.latitude = values['lan']
                        instance.longitude = values['long']
                        instance.phone_mode = values['phone_mode']
                        instance.phone_state = values['phone_state']
                    instance.save()
            except:
                pass

        # wishlist data
        data = database.child('wishlist').get().val()
        for keys, values in data.items():
            print(keys)
            print(list(values))
            product_idx = list()
            for k in values.values():
                product_idx.append(list(k.values())[0])
            print(product_idx)
            for i in range(0, len(list(values))-1):
                instance, created = Wishlist_product.objects.get_or_create(email=str(keys), timestamp=list(values)[i], product=product_idx[i])
                instance.save()

        # product interested
        data = database.child('user_behaviour').get().val()
        for keys, values in data.items():
            print(keys)
            print(list(values))
            product_idx = list()
            for k in values.values():
                product_idx.append(list(k.values())[0])
            print(product_idx)
            for i in range(0, len(list(values))-1):
                instance, created = UserBehaviour.objects.get_or_create(email=str(keys), timestamp=list(values)[i], product=product_idx[i])
                instance.save()


        # search history
        data = database.child('search_history').get().val()
        for keys, values in data.items():
            print(keys)
            print(list(values))
            product_idx = list()
            for k in values.values():
                product_idx.append(list(k.values())[0])
            print(product_idx)
            for i in range(0, len(list(values))-1):
                instance, created = SearchHistory.objects.get_or_create(email=str(keys), timestamp=list(values)[i], query=product_idx[i])
                instance.save()

        # geolocation
        data = database.child('geolocation').get().val()
        for keys, values in data.items():
            print(keys)
            print(list(values))
            lat = list()
            long = list()
            for k in values.values():
                lat.append(list(k.values())[0])
                long.append(list(k.values())[1])
            print(lat)
            print(long)
            for i in range(0, len(list(values))-1):
                instance, created = GeoLocation.objects.get_or_create(email=str(keys), timestamp=list(values)[i], lat=lat[i], long=long[i])
                instance.save()

        # added to cart
        data = database.child('user_behaviour').get().val()
        for keys, values in data.items():
            print(keys)
            print(list(values))
            product_idx = list()
            for k in values.values():
                product_idx.append(list(k.values())[0])
            print(product_idx)
            for i in range(0, len(list(values))-1):
                instance, created = AddedToCart.objects.get_or_create(email=str(keys), timestamp=list(values)[i], product=product_idx[i])
                instance.save()

        # purchase data
        data = database.child('purchase_data').get().val()
        for keys, values in data.items():
            print(keys)
            print(list(values))
            product_idx = list()
            for k in values.values():
                product_idx.append(list(k.values())[0])
            print(product_idx)
            for i in range(0, len(list(values))-1):
                instance, created = PurchaseData.objects.get_or_create(email=str(keys), timestamp=list(values)[i], product=product_idx[i])
                instance.save()


        return HttpResponse("<h1>Data fetched from Firebase.</h1>")

        
    except Exception as e:
        return HttpResponse("Error: " + str(e))


import csv
from django.template import loader
import random
import gzip
from sh import pg_dump

def export_to_csv(request):
    # The only line to customize
    model_class = PurchaseData

    meta = model_class._meta
    field_names = [field.name for field in meta.fields]

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)
    writer = csv.writer(response)

    writer.writerow(field_names)
    for obj in model_class.objects.all():
        row = writer.writerow([getattr(obj, field) for field in field_names])
    return response
    # try:
    #     path = MEDIA_ROOT + 'backup'+ str(random.randint(0,1000)) +'.gz'
    #     with gzip.open(str(path), 'wb') as f:
    #         pg_dump('-h', 'localhost', '-U', 'robomx', 'clustmpay', _out=f)
    #     return HttpResponse("Data saved at " + str(path))
    # except Exception as e:
    #     return HttpResponse("Error: " + str(e))
    
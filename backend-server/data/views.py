from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse
from configurations.settings import database, auth, db
from pyfcm import FCMNotification
from .models import User

push_service = FCMNotification(
                    api_key="AAAAuIvKSI0:APA91bFZ-eAVlKwN5R3txdjBiBSs3m6QB4pVEGo6CtFXEDJCfFR2pm7X_almIUiTPUrUdQ2lkGSN3FO04h1SC4I985Jcp4yP1-mNM77OSiFYq9TKd4dBJ57Wg7e3UMbciHqH_XX-NdWp"
                )        


def home(request):
    return redirect('/backend')


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



def send_note(request):
    try:
        email = request.GET.get('email');
        message_title = "New service launch"
        message_body = "ClusTMPay has been promoted all over the world"
        registration_id = User.objects.filter(email=email).only('device_id')
        registration_id = [i.device_id for i in registration_id]
        result = push_service.notify_single_device(registration_id=registration_id[0], message_title=message_title, message_body=message_body)
        print(result['results'][0]['message_id'])
        return HttpResponse("done " + str(email))
    except Exception as e:
        return HttpResponse("Error: " + str(e))


# create data in firebase - results = database.child("users").push(data)
# create user in firebase -  auth.create_user_with_email_and_password("robomex2020@gmail.com", "test123456")


def firebase(request):
    try:
        # fetch user data
        users = db.collection(u'users').get()
        for user in users:
            instance, created = User.objects.get_or_create(email = user.id)
            if not created:
                instance.device_id = user.to_dict()['device-id'] 
            instance.save()
        return HttpResponse("Done")
    except Exception as e:
        return HttpResponse("Error: " + str(e))


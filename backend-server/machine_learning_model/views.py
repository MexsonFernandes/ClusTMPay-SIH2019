from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import classification_report
import pickle
from data.tasks import train_model
from data.tasks import Train_model
from configurations.settings import MEDIA_ROOT
from machine_learning_model .zion import *
import random

def context(request):
    data = request.GET.get()
    return HttpResponse("done")

def train(request):
    try:   
        email = request.GET.get('email')
        if email is None:
            return HttpResponse('No GET request')
        user = Train_model(MEDIA_ROOT + '/8615101.csv')
        print(user.get_data().columns)
        clf = user.train_eval()
        path_id = random.randint(0,1000)
        user.save_mdl(clf, str(email).replace('.','_') + 'pers' + str(path_id), MEDIA_ROOT + "/ ")
        return HttpResponse("Model has been trained for user " + str(email))
    except Exception as e:
        return HttpResponse(str(e))
    
database = 'recombtm'
token = 'djjzGlN5JPmG9nyeZgMt90P74h27jLRa1yLAd78svHptS014nvAmX5JvwAAHKh2f'

def recommendation(request):
    amount = request.GET.get('no')
    user = request.GET.get('user')#sih_test@-
    item = pred_prod(database, token, user, amount)
    return HttpResponse("Django server recommends <h3> " + str(item.values()) + '</h3>')


import os
from django.core.mail import EmailMessage
from configurations import settings
def send_email(subject, mail_message, to,):
    from_email = settings.EMAIL_HOST_USER
    to_list = [to,]
    send_email = EmailMessage(str(subject), str(mail_message), str(from_email), to_list)
    send_email.content_subtype='html'
    send_email.send()


def notification_email(request):
    email = request.GET.get('email')
    send_email("ClusTMPay recommends following productt!!!", "<h4>Check out your intentful products.</h4><img src='https://static.pexels.com/photos/133919/pexels-photo-133919-medium.jpeg' width='100px' height='150px'/>", email)
    return HttpResponse("done")


def notification(request):
    email = request.GET.get('email')
    data = os.system("curl -b csrftoken=sometoken http://127.0.0.1:8000/api/data/send_note?email=" + str(email))
    return HttpResponse("done")
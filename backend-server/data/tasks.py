from configurations.celery import app
import os
from configurations.settings import database
from celery import task
from celery.schedules import crontab
from django.shortcuts import HttpResponse
from configurations.settings import database, auth, db
from pyfcm import FCMNotification
from .models import User
from configurations.settings import BASE_DIR, MEDIA_ROOT

from celery import shared_task

@shared_task
def train_model():
	try:
		
		user = Train_model(MEDIA_ROOT + 'dummy.csv')
		print(user.get_data().columns)
		clf = user.train_eval()
		clf.save_mdl(clf, 'pers001', MEDIA_ROOT + "/8615101@apiit.edu.in/")

	except Exception as e:
		pass



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

		# collect notification data for each user
		# user = User.objects.all()
		# for u in user:
		# 	data = database.child('sent_notification_activity').child(str(u.email)).child.get().val()
		# 	instance = Notification.create(lat=data['lat'], long=data['long'])
		# 	instance.save()
	except Exception as e:
		print(e)


from django.shortcuts import render

# Create your views here.


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import classification_report
import pickle



class Train_model:
    '''
    This class formats the dataset to use for training the model
    and saves the model in the desired location.
    '''
    def __init__(self,df):
        self.df = goodify_data(df)
        
    def get_data(self):
        return self.df
    
    def train_eval(self):
        '''
        Trains a ML model.. Returns the accuracy.
        '''
        X = self.df.drop(labels = ['action'],axis = 1)
        y = self.df['action']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33,random_state = 101)
        print('Train-Test ongoing for..')
        dtree = DecisionTreeClassifier()
        dtree.fit(X_train,y_train)
        predictions = dtree.predict(X_test)
        print(classification_report(y_test,predictions))
        print('DONE')
        return dtree
    def save_mdl(self, mdl, model_name, save_path):
        with open(save_path + model_name + '.pkl', 'wb') as f:
            pickle.dump(mdl, f)
        print('Model Saved in ' + save_path + model_name + '.pkl')

def c_model(file, model_name="test", save_path="saved_mdl/"):
    u_obj = train_model(file) # user file contains notifcation etc.
    u_clf = u_obj.train_eval()
    u_obj.save_mdl(u_clf, model_name, save_path)



from datetime import timedelta

app.conf.beat_schedule = {
    "send-notification": {
        "task": "data.tasks.send_notification",
        "schedule": crontab(minute="*/1")
    }
}




import pandas as pd 
import datetime
'''
timestamp = 155551599485
date = datetime.datetime.fromtimestamp(timestamp/1e3)
'''
def goodify_data(file):
    '''
    Does basic things like extracting date, day, etc.
    '''
    df = pd.read_csv(file)
    df['send_time'] = pd.to_datetime(df['send_time'])
    df['hour'] = df['send_time'].apply(lambda x:x.hour)
    df['minute'] = df['send_time'].apply(lambda x:x.minute)
    df['day'] = df['send_time'].apply(lambda x:x.dayofweek)
    day_map = {0:'Mon',1:'Tue',2:'Wed',3:'Thu',4:'Fri',5:'Sat',6:'Sun'}
    df['day'] = df['day'].map(day_map)
    days_send = pd.get_dummies(df['day'])
    df = df.drop(labels=['clicked_time','n_id','send_time','day'],axis = 1)
    df = pd.concat([df,days_send], axis = 1)
    return df
    ########################################################

    # send_hour,click_hour,delay,day:
def chart_insights(df):
    df['send_time'] = pd.to_datetime(df['send_time'])
    df['viewed_time'] = pd.to_datetime(df['viewed_time'])

    df['send_day'] = df['send_time'].apply(lambda x:x.dayofweek)
    df['send_hour'] = df['send_time'].apply(lambda x:x.hour)
    df['send_minute'] = df['send_time'].apply(lambda x:x.minute)

    df['viewed_day'] = df['viewed_time'].apply(lambda x:x.dayofweek)
    df['viewed_hour'] = df['viewed_time'].apply(lambda x:x.hour)
    df['viewed_minute'] = df['viewed_time'].apply(lambda x:x.minute)

    return df

def get_global_dic(prod_lst,user_id):
    '''This function takes list of products and return dict:
    '''
    dic= {}
    for i,k in enumerate(prod_lst):
        if k not in dic:
            dic[k] = i
    lst = []
    for item,keys in dic.items():
        lst.append({'user_id': user_id,'item_id':keys})
    return lst

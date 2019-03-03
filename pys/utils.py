import pandas as pd 
import datetime
from sklearn.cluster import KMeans

'''
timestamp = 155551599485
date = datetime.datetime.fromtimestamp(timestamp/1e3)
'''

def goodify_data(file):
    '''
    Does basic things like extracting date, day, etc.
    '''
    df = pd.read_csv(file,index_col=0)
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

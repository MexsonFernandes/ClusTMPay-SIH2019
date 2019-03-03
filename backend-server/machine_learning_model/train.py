
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import classification_report
from utils import goodify_data
import pickle


class train_model:
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


if __name__ == '__main__':
    None

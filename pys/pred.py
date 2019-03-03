import pickle
from utils import goodify_data


def load_m(file):
    '''
    Load model funtion.

    Inputs -
        file: model path and name
    
    Returns - 
        clf - unpickled model object
    '''
    with open(file, 'rb') as f:
        clf = pickle.load(f)
        return clf


def pred(model_path, data):
    '''
    Prediction fuction for the model
    Inputs -
        model_path: input path and pickled model name
        data: input values for the model

    Returns -
        predictions: Action taken on the values
            1 for accept
            0 for reject
    '''
    clf = load_m(model_path)
    data = goodify_data(data)
    # Below line to be commented, 'action' is the target column
    data = data.drop(labels = ['action'],axis = 1)
    predictions = clf.predict_proba(data)
    return predictions


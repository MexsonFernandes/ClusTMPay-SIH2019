from recombee_api_client.api_client import RecombeeClient
from recombee_api_client.api_requests import *
import json
from utils import *
# MAPP



# update zion
def push_zion(database,token,prod_list,user, timestamp = False):
  items= get_global_dic(prod_list,user)
  print(items)
  client = RecombeeClient(database, token)
  if timestamp:
    requests = []
    for item in items:
      r = AddPurchase(item['user_id'],item['item_id'],timestamp = item['timestamp'],cascade_create=True)
      client.send(r)
    requests = []
    for item in items:
      r = AddDetailView(item['user_id'],item['item_id'],timestamp=item['timestamp'],cascade_create=True)
      requests.append(r)
    br = Batch(requests)
    client.send(br)
  else:
    requests = []
    for item in items:
      r = AddPurchase(item['user_id'],item['item_id'],cascade_create=True)
      client.send(r)
    
    requests = []
    for item in items:
      r = AddDetailView(item['user_id'],item['item_id'],cascade_create=True)
      requests.append(r)
      br = Batch(requests)
      client.send(br)
  print('Done')

def pred_prod(database,token,USER,NUMBER):
  client = RecombeeClient(database, token)
  recommended = client.send(RecommendItemsToUser(USER, 5))
  print(recommended)

if __name__ == '__main__':
  None
        

    
    
    

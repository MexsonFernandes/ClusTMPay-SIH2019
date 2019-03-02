import os
from celery import Celery
 
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'configurations.settings')
 
app = Celery('configurations')
app.config_from_object('django.conf:settings')
 
# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
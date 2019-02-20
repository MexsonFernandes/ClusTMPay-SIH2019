Django-REST-Framework-Mongoengine for ClusTMPay
===============================================

Contains:
	Admin Panel
	Database
	REST and GraphQL
	Django Server
	ML models


How to use it
-------------

In the toplevel directory of the project there is a requirements.txt file with all the python dependencies, required for this project to run. Install them with

`pip install -r requirements.txt`

You'll also need a working instance of MongoDB - install it as an apt package in your system with:

`sudo apt-get install mongodb`

After that you'll need to create a database in MongoDB, called `project`, where this project's collections will be stored.

To run this project with django development server, just go to `project` folder and say:

`python manage.py runserver`

and visit http://localhost:8000/api/ url, where you'll find the root of your REST api.


Project structure
-----------------

The toplevel directory contains a single django project, called, ahem, `project`. Within it there are a per-project folder called `project`, where global settings are stored, and two django app, called `users` and `app`. `users` contains the user model and an example of authentication implementation, while `app` contains several API endpoints, demonstrating DRF-Mongoengine capabilities.

Technology Stack
----------------
Django
MongoDB
GraphQL
REST
CanvasJS + CoreUI




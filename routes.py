'''
Created by DhilipSiva.

Sites:
http://DhilipSiva.com
http://twitter.com/DhilipSiva
http://github.com/DhlipSiva
http://facebook.com/DhilipSiva

email : dhilipsiva@gmail.com

Phone :(+91) 81 97 98 53 97
'''
import views
import api

Routes = [
            ('/', views.MainHandler),
            ('/pp', views.PPHandler),
            ('/tos', views.TOSHandler),
            (r'(.*)', views.LastHandler),
            ]
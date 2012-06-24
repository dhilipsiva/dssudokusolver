import views

Routes = [
            ('/', views.MainHandler),
            ('/pp', views.PPHandler),
            ('/tos', views.TOSHandler),
            ('/solution', views.SolutionHandler),
            (r'(.*)', views.LastHandler),
            ]
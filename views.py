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
import webapp2
from webapp2_extras import jinja2

#Just a dummy text context feed it to Jinja2
context = {'Dummy':'Text'}

'''
NOTE : I am defining both the get and post functions because the appengine GETs the request while accessing it using facebook page, actually makes a POST request. So we need both.
'''


#The Base Handler
class BaseHandler(webapp2.RequestHandler):

    @webapp2.cached_property
    def jinja2(self):
        return jinja2.get_jinja2(app=self.app)

    def render_response(self, _template, **context):
        rv = self.jinja2.render_template(_template, **context)
        self.response.write(rv)

#App Front end
class MainHandler(BaseHandler):

    def get(self):
        self.render_response('index.html', **context)

    def post(self):
        self.render_response('index.html', **context)


#Privacy policy URL
class PPHandler(BaseHandler):

    def get(self):
        self.render_response('pp.html', **context)

    def post(self):
        self.render_response('pp.html', **context)


#Terms of service URL
class TOSHandler(BaseHandler):

    def get(self):
        self.render_response('tos.html', **context)

    def post(self):
        self.render_response('tos.html', **context)


#Solution URL
class SolutionHandler(webapp2.RequestHandler):

    def get(self):
        print self.request.get('q')


#Fallback for page not found
class LastHandler(BaseHandler):

    def get(self, missingUrl):
        self.render_response('last.html', **context)

    def post(self, missingUrl):
        self.render_response('last.html', **context)

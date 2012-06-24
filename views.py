import webapp2
from webapp2_extras import jinja2

context = {'Dummy':'Text'}

class BaseHandler(webapp2.RequestHandler):

    @webapp2.cached_property
    def jinja2(self):
        return jinja2.get_jinja2(app=self.app)

    def render_response(self, _template, **context):
        rv = self.jinja2.render_template(_template, **context)
        self.response.write(rv)

class MainHandler(BaseHandler):

    def get(self):
        self.response.out.write(self.render_response('index.html', **context))

    def post(self):
        self.response.out.write(self.render_response('index.html', **context))


class PPHandler(BaseHandler):

    def get(self):
        self.response.out.write(self.render_response('index.html', **context))

    def post(self):
        self.response.out.write(self.render_response('index.html', **context))


class TOSHandler(BaseHandler):

    def get(self):
        self.response.out.write(self.render_response('index.html', **context))

    def post(self):
        self.response.out.write(self.render_response('index.html', **context))


class SolutionHandler(BaseHandler):

    def get(self):
        self.response.out.write(self.render_response('index.html', **context))

    def post(self):
        self.response.out.write(self.render_response('index.html', **context))


class LastHandler(BaseHandler):

    def get(self, missingUrl):
        self.response.out.write(self.render_response('index.html', **context))

    def post(self, missingUrl):
        self.response.out.write(self.render_response('index.html', **context))

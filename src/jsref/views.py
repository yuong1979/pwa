from django.shortcuts import render
from django.views.generic import TemplateView, View
# Create your views here.
from django.http import HttpResponse
import os

class HomeView(TemplateView):
	template_name = "home.html"

	def get(self, request, *args, **kwargs):
		context = self.get_context_data(**kwargs)
		return self.render_to_response(context)

class Test1View(TemplateView):
	template_name = "test1.html"

	def get(self, request, *args, **kwargs):
		context = self.get_context_data(**kwargs)
		return self.render_to_response(context)






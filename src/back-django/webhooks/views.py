from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views import View
from django.utils import simplejson
from .models import Webhook

def WebhookView(View):
    def get(self, request):
        return JsonResponse(Webhook.objects)

    # TODO
    def post(self, request):
        pass



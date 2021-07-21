from django.urls import path
from .views import WebhookListView

urlpatterns = [
    path("webhooks/", WebhookListView.as_view()),
]

from django.db import models

class Webhook(models.Model):
    name: models.TextField
    description: models.TextField

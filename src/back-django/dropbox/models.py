import requests
from requests.models import HTTPBasicAuth
from dropbox.secrets import DROPBOX_PUBLIC_KEY, DROPBOX_SECRET_KEY
import dropbox as dbx
from django.db import models

class Auth(models.Model):
    token = models.JSONField
    refresh_token = models.JSONField

    def get_access_token(self, code: str) -> str:
        req = requests.post("https://api.dropboxapi.com/oauth2/token", auth=HTTPBasicAuth(DROPBOX_PUBLIC_KEY, DROPBOX_SECRET_KEY))

        if req.status_code is 200:
            pass

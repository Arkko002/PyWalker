from datetime import date
from django.db import models
import dropbox
from dropbox import files

from .secrets import DROPBOX_SECRET_KEY
from .settings import DROPBOX_PUBLIC_KEY, DROPBOX_REDIRECT_URI


class UploadedFile(models.Model):
    name: models.TextField
    scraper_api_url: models.URLField
    scraper_api_id: models.IntegerField


class TokenAuth(models.Model):
    account_id = models.TextField
    token = models.TextField
    refresh_token = models.TextField
    expires_at = models.DateTimeField


class ScraperDropboxSession:
    def __init__(self, token: TokenAuth = None) -> None:
        if token is not None:
            self.token = token

    def authorize_oauth(self, code: str):
        oauth = dropbox.DropboxOAuth2Flow(DROPBOX_PUBLIC_KEY, DROPBOX_REDIRECT_URI, {}, "csrf_token", DROPBOX_SECRET_KEY)

        try:
            oauth_result = oauth.finish(code)

            if self.token is None:
                self.token = TokenAuth()

            self.token.account_id = oauth_result.account_id
            self.token.token = oauth_result.access_token
            self.token.refresh_token = oauth_result.refresh_token
            self.token.expires_at = oauth_result.expires_at
            self.token.save()

            self.dbx = dropbox.Dropbox(self.token.token, oauth2_refresh_token=self.token.refresh_token, oauth2_access_token_expiration=self.token.expires_at)
        except dropbox.exceptions.AuthError as e:
            # TODO Error handling
            return

    def revoke_oauth_authorization(self):
        self.dbx.auth_token_revoke()
        self.token.delete()

    def upload_file(self, file: UploadedFile):
        path = date.today().isoformat() + file.name

        if self.__should_use_upload_session:
        # TODO Split file into 150Mb chunks, append each chunk to session
            try:
                session = self.dbx.files_upload_session_start(file)
            except dropbox.exceptions.ApiError as e:
                # TODO Error handling
                return
        else:
            try:
               self.dbx.files_upload(file, path, files.WriteMode.add)
            except dropbox.excepions.ApiError as e:
                # TODO Error handling
                return

    # TODO
    def __should_use_upload_session(self, file):
        # Return true for files bigger than 150Mb 
        # return len(content.encode("utf-8")) / 1000000 > 150
        return False


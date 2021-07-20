from django.http import HttpRequest, HttpResponseBadRequest
from django.http.response import HttpResponse
from models import ScraperDropboxSession

session = ScraperDropboxSession()

def authorize_dropbox(request: HttpRequest):
    code = request.GET.get("code", "")

    if len(code) == 0:
        return HttpResponseBadRequest("No access code provided.")

    try:
        session.authorize_oauth(code)
    except Exception as e:
        # TODO Log exception
        return HttpResponseBadRequest("Couldn't authorize with the provided code.")

def revoke_authorization(request: HttpRequest):
    session.revoke_authorization()

    return HttpResponse("Dropbox authorization revoked")

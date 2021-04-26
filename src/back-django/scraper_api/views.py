import json

from django.core import serializers
from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponseServerError, JsonResponse
from django.views import View

from scraper_api.models import ScrapedPage
from scraper_api.services.scraper import Scraper


class PageListView(View):
    def get(self, request: WSGIRequest):
        pages = serializers.serialize("json", ScrapedPage.objects.all())

        return JsonResponse(pages)

    def post(self, request: WSGIRequest):
        # TODO Search list for parameters
        pass


class PageView(View):
    def get(self, request: WSGIRequest, page_id):
        page_json = serializers.serialize("json", ScrapedPage.objects.get(id=page_id))

        return JsonResponse(page_json)

    def post(self, request: WSGIRequest):

        json_data = json.loads(request.body)
        try:
            # TODO
            scraper = Scraper(json_data["urls"], engine="Soup")
            scraped_pages = scraper.get_results()
        except Exception as ex:
            return HttpResponseServerError(ex)

        for page in scraped_pages:
            page.request.save()

            for child in page.child_pages:
                child.save()

            page.save()

        json_page = json.dumps(scraped_pages)
        return JsonResponse(json_page)

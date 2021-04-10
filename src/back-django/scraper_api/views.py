import json

from django.core import serializers
from django.http import JsonResponse, HttpResponseServerError
from django.shortcuts import get_object_or_404
from django.views import View

from models import ScrapedPage
from scraper_api.services.scraper import Scraper


class PageListView(View):
    def get(self, request):
        pages = serializers.serialize("json", ScrapedPage.objects.all())

        return JsonResponse(pages)

    def post(self, request):
        # TODO Search list for parameters
        pass


class PageView(View):
    def get(self, request, page_id):
        page_obj = get_object_or_404(ScrapedPage, pk=page_id)
        page_json = serializers.serialize("json", page_obj)

        return JsonResponse(page_json)

    def post(self, request):
        json_data = json.loads(request.raw_post_data)
        try:
            # TODO
            scraper = Scraper(json_data["urls"], json_data["search"], json_data["follow_links"],
                              json_data["headers"], json_data["scraper"])
            scraped_page = scraper.get_results()
        except Exception as ex:
            return HttpResponseServerError(ex)

        scraped_page.save()
        json_page = json.dumps(scraped_page)

        return JsonResponse(json_page)

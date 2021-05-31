import json

import pytest
from django.urls import reverse

from scraper_api.models import ScrapedPage


class TestPageView:
    @pytest.mark.django_db
    def test_get(self, fill_db, client, url, html, request_soup, response_soup):
        url = reverse("page/1")
        response = client.get(url)
        body_obj = json.loads(response.body)

        # TODO all properties
        assert (body_obj.url == url
                and body_obj.html == html)

    @pytest.mark.django_db
    def test_post_returns_json(self, client, url):
        #TODO All properties
        url = reverse("page/")
        data = {"url": url, "scraper": "Soup"}
        data_json = json.dumps(data, sort_keys=True)
        response = client.post(url, data=data_json)

        assert data_json == json.dumps(response.body, sort_keys=True)

    @pytest.mark.django_db
    def test_post_saves_to_db(self, client, url):
        #TODO All properties
        url = reverse("page/")
        data = {"url": url, "scraper": "Soup"}
        data_json = json.dumps(data)
        client.post(url, data=data_json)

        assert ScrapedPage.objects.count() == 1

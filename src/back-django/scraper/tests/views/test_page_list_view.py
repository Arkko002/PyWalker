import json

import pytest
from django.urls import reverse

from scraper_api.models import ScrapedPage


class TestPageListView:
    @pytest.mark.django_db
    def test_get(self, client, fill_db, url, html):
        url = reverse("pages/")
        response = client.get(url)
        pages = json.loads(response.body)

        assert pages.len() == fill_db

    @pytest.mark.django_db
    def test_post(self, client):
        url = reverse("pages/")
        data = {"url": "url1"}

        page1 = ScrapedPage(url="url1")
        page2 = ScrapedPage(url="url2")
        page1.save()
        page2.save()

        response = client.post(url, json.dumps(data))
        res_pages = json.loads(response.body)

        assert (res_pages[0].url == "url1"
                and res_pages.len() == 1)

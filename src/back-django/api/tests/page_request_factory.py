import factory
from requests import Request

from scraper_api.models import PageRequest


class PageRequestFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = PageRequest

    code = 200
    request = Request()

import pytest
from requests import Request, Response

from scraper_api.models import ScrapedPage


@pytest.fixture()
def fill_db(url, html, request_soup, response_soup):
	page = ScrapedPage(url=url, html=html, request=request_soup, request_result=response_soup)
	page.save()
	return ScrapedPage.objects.count()


#TODO Proper test urls, html
@pytest.fixture()
def html():
	yield "testhtml"


@pytest.fixture()
def multiple_url():
	yield ["testurl", "testurl", "testurl"]


@pytest.fixture()
def url():
	yield "testurl"


@pytest.fixture()
def request_soup():
	yield Request(method="GET", url="url")


@pytest.fixture()
def response_soup(url):
	mock_response = Response()
	mock_response.url = url
	yield mock_response

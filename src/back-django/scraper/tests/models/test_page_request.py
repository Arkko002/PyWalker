import pytest
from requests import Request

from scraper_api.models import PageRequest


class TestPageRequest:
	def test_create_soup(self, url, request_soup):
		# TODO Request mock
		mock_request = Request(method="GET", url=url)
		src_dict = {"code": 200, "request": request_soup}

		page_request = PageRequest.create(src_dict)

		assert (page_request.code == 200
				and page_request.original_request["url"] == url)

	def test_create_soup_missing_fields(self):
		src_dict = {}

		with pytest.raises(KeyError):
			PageRequest.create(src_dict)

	def test_create_scrapy(self):
		pass

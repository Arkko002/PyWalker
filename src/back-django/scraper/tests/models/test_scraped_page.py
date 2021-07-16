import pytest

from scraper_api.models import ScrapedPage


class TestScrapedPage:
	def test_create_soup(self, url, html, request_soup, response_soup):
		#TODO mock request
		src_dict = {"url": url, "html": html, "result": response_soup, "code": 200, "request": request_soup}

		scraped_page = ScrapedPage.create(src_dict)

		assert (scraped_page.url == url
				and scraped_page.html == html)

	def test_create_soup_missing_fields(self):
		src_dict = {}

		with pytest.raises(KeyError):
			ScrapedPage.create(src_dict)

	def test_create_scrapy(self):
		pass

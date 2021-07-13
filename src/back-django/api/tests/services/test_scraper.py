import pytest

from scraper_api.services.scraper import Scraper
from scraper_api.services.soup.soup_scraper import SoupScraper


class TestScraper:
	def test_soup_engine(self, url):
		scraper = Scraper([url], "Soup")
		assert isinstance(scraper.engine, SoupScraper)

	def test_scapy_engine(self, url):
		scraper = Scraper([url], "Scrapy")
		#TODO
		assert isinstance(scraper.engine, )

	def test_wrong_engine(self, url):
		with pytest.raises(ValueError):
			Scraper([url], "Wrong")
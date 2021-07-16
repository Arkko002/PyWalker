import pytest
from requests import Response, Request

from scraper_api.services.soup.soup_scraper import SoupScraper


class TestSoupScraper:
    #TODO Mock page with links and searchable tags
    #TODO Session mocking
    def test_parse(self, url):
        scraper = SoupScraper([])
        result = scraper.parse(url)

        assert (isinstance(result["response"], Response)
                and isinstance(result["request"], Request))

    def test_parse_bad_url(self):
        scraper = SoupScraper([])

        with pytest.raises(ValueError):
            scraper.parse("bad-url")

    def test_get_results(self, multiple_url):
        scraper = SoupScraper(multiple_url)
        results = scraper.get_results()

        #TODO assert

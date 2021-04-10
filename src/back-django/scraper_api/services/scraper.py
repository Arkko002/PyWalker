from scraper_api.models import ScrapedPage
from scraper_api.services.scraper_type import ScraperType
from scraper_api.services.soup.soup_scraper import SoupScraper


class Scraper:
    def __init__(self, urls: [],
                 search_dict=None,
                 follow_links=True,
                 headers=None,
                 engine=str):
        self.urls = urls
        self.search_dict = search_dict
        self.follow_links = follow_links
        self.headers = headers

        self.engine = self._create_scraping_engine(ScraperType[engine])

    def get_results(self) -> ScrapedPage:
        pass

    def _create_scraping_engine(self, type: ScraperType):
        if type is ScraperType.Soup:
            return SoupScraper(self.urls, self.search_dict, self.follow_links, self.headers)

        if type is ScraperType.Scrapy:
            # TODO
            pass

        raise ValueError("Provided engine value was incorrect")

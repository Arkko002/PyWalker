from scraper_api.models import ScrapedPage
from scraper_api.services.scraper_type import ScraperType
from scraper_api.services.soup.soup_scraper import SoupScraper


class Scraper:
    def __init__(self, urls: list,
                 search_dict=None,
                 follow_links=True,
                 headers=None,
                 engine=str):
        self.urls = urls

        # TODO Follow_links to Options object with configs
        self.engine = self._create_scraping_engine(ScraperType[engine], follow_links, search_dict, headers)

    def get_results(self) -> list[ScrapedPage]:
        scraped_pages = []
        for result_dict in self.engine.parse_list(self.urls):
            root_page = ScrapedPage.create(result_dict)
            scraped_pages.append(root_page)

            for url in result_dict["links"]:
                #TODO One-To-Many relationship, child relation based on url
                #TODO Duplicate URL detection, infinite loop prevention
                child_dict = self.engine.parse(url)
                root_page.child_pages.add(ScrapedPage.create(child_dict))

        return scraped_pages

    def _create_scraping_engine(self, engine_type: ScraperType, follow_links=True, search_dict=None,
                                headers=None):
        if engine_type is ScraperType.Soup:
            return SoupScraper(search_dict, follow_links, headers)

        if engine_type is ScraperType.Scrapy:
            # TODO
            pass

        raise ValueError("Provided engine value was incorrect")

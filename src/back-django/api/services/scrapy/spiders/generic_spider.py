import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.http import Response

from ..items import GenericPage

# TODO LinkExtractor allow only domain in urls list
class GenericSpider(CrawlSpider):
    name = "generic"

    def __init__(self, urls: list[str], search_dict=None, follow_links=True, *args, **kwargs):
        self.logger.info("Created a GenericSpider")
        self.search_dict = search_dict
        self.start_urls = urls
        # TODO 
        self.allowed_domains = urls

        self.rules = (
            Rule(follow=follow_links),
            Rule(callback=self.parse)
        )
        super().__init__(*args, **kwargs)

    def start_requests(self):
        return [scrapy.Request((url for url in self.start_urls), callback=self.parse)]

    def parse(self, response: Response):
        self.logger.info(f"Parsing {response.url}")

        page = GenericPage()
        page.url = response.url
        page.body = response.body

        yield page

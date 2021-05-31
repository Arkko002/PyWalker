import scrapy
from scrapy.spiders.crawl import CrawlSpider
from scrapy.spiders import CrawlSpider, Rule
from scrapy.http import Response

from ..items import MorelePage

class MoreleSpider(CrawlSpider):
    name = "morele"
    allowed_domains = ["morele.net"]

    def __init__(self, urls: list[str], search_dict=None, follow_links=True, *args, **kwargs):
        self.logger.info("Created a MoreleSpider")
        self.search_dict = search_dict
        self.start_urls = urls

        self.rules = (
            Rule(follow=follow_links),
            Rule(callback=self.parse)
        )
        super().__init__(*args, **kwargs)

    def start_requests(self):
        return [scrapy.Request((url for url in self.start_urls), callback=self.parse)]

    def parse(self, response: Response):
        self.logger.info(f"Parsing {response.url}")

        page = MorelePage()
        page.url = response.url
        page.body = response.body

        yield page

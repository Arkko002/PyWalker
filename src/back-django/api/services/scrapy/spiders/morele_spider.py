import scrapy
from scrapy.spiders.crawl import CrawlSpider
from scrapy.spiders import CrawlSpider, Rule
from scrapy.http import Response

from ..items import MorelePage
from ..loaders.morele_loader import MoreleLoader

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

        loader = MoreleLoader(MorelePage(), response)
        loader.add_value("url", response.url)
        loader.add_value("body", response.body)
        loader.add_xpath("category", "//div[@class='category-list']/@data-category-name")

        # TODO data extraction, defaults, loader setup
        product_cards = response.xpath("//div[@class='cat-product card']")
        if product_cards is None:
            yield

        for item in product_cards:
            loader.add_xpath("item_name", "//p[@class='cat-product-name']/a/text()")
            loader.add_xpath("price", "//div[@class='price-new']/text()")
            loader.add_xpath("discount", "//div[@class='sale-box']/text()")


        yield page

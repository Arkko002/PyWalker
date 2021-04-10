import scrapy
from scrapy.http import Response


class GenericSpider(scrapy.Spider):
    name = "scraper_api"

    def __init__(self, urls: [], search_dict=None, follow_links=True, *args, **kwargs):
        self.start_urls = urls
        super().__init__(*args, **kwargs)

    def start_requests(self):
        return [scrapy.Request([url for url in self.start_urls], callback=self.parse)]

    def parse(self, response: Response, **kwargs):
        result = {"response": response}

        for tag, prop in self.search_dict:
            #TODO
            query = f"{tag}::{prop}"
            result[query] = response.css(query).getall()

        if self.follow_links:
            links = response.css("a")
            yield from response.follow_all(links, self.parse)

        yield result

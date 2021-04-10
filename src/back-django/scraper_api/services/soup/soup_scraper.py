import validators
from bs4 import BeautifulSoup
from requests import Response, Request, Session


class SoupScraper:
    def __init__(self, urls: [], search_dict=None, follow_links=True, headers=None):
        self.urls = urls,
        self.follow_links = follow_links
        self.search_dict = search_dict
        self.headers = headers

    def parse(self, url) -> {}:
        if not validators.url(url):
            raise ValueError(f"Not a valid URL {url}")

        s = Session()
        req = Request("GET", url, self.headers)

        try:
            res = s.send(req.prepare())
        except Exception as ex:
            raise ex

        result = {"response": res, "request": req}
        if self.search_dict is None:
            yield result

        soup = BeautifulSoup(res.text)
        for tag, prop in self.search_dict:
            #TODO
            result[f"{tag}::{prop}"] = soup.tag.prop

        if self.follow_links:
            self.urls.append([link["href"] for link in soup.findAll('a', href=True)])

        yield result

    def get_results(self) -> [{}]:
        return [result for result in self.parse([url for url in self.urls])]

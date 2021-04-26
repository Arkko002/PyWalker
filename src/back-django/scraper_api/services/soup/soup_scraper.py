from typing import Dict

from bs4 import BeautifulSoup
from requests import Request, Response, Session
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError

class SoupScraper:
    def __init__(self, search_dict=None, follow_links=True, headers=None):
        self.follow_links = follow_links
        self.search_dict = search_dict
        self.headers = headers

    def parse(self, url: str) -> dict[str, object]:
        validator = URLValidator()
        try:
            validator(url)
        except ValidationError as e:
            raise e

        s = Session()
        req = Request("GET", url, self.headers)

        try:
            res = s.send(req.prepare())
        except Exception as ex:
            raise ex

        result = {"response": res, "request": req, "links": []}
        if self.search_dict is None:
            return result

        soup = BeautifulSoup(res.text)
        for tag, prop in self.search_dict:
            #TODO
            result[f"{tag}::{prop}"] = soup.tag.prop

        if self.follow_links:
            links = [link["href"] for link in soup.findAll("a", href=True)]
            result["links"] = links

        return result

    def parse_list(self, urls: list) -> [dict[str, object]]:
        for url in urls:
            yield self.parse(url)

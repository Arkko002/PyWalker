import json

from django.db import models


class PageRequest(models.Model):
    code = models.IntegerField(default=0)
    original_request = models.JSONField()
    response = models.JSONField(default=None)

    @classmethod
    def create(cls, src_dict):
        return cls(code=src_dict["response"].status_code, original_request=src_dict["request"], response=src_dict["response"])


class ScrapedPage(models.Model):
    # Sitemaps protocol defines maximum URL length as 2048.
    # Longer URLs are possible, but very uncommon.
    url = models.CharField(max_length=2048)
    html = models.JSONField()
    request = models.OneToOneField(PageRequest, on_delete=models.CASCADE)
    child_pages = models.ManyToManyField("self")

    def __str__(self):
        return self.url

    @classmethod
    def create(cls, src_dict):
        url = src_dict["request"].url
        html = src_dict["response"].text
        request = PageRequest.create(src_dict)
        #TODO child pages
        return cls(url=url, html=html, request=request)

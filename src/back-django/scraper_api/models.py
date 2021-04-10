import json

from django.db import models


class PageRequest(models.Model):
    code = models.IntegerField(default=0)
    original_request = models.JSONField()

    @classmethod
    def create(cls, src_dict):
        request_json = json.dumps(src_dict["request"])
        return cls(code=src_dict["code"], original_request=request_json)


class ScrapedPage(models.Model):
    # Sitemaps protocol defines maximum URL length as 2048.
    # Longer URLs are possible, but very uncommon.
    url = models.CharField(max_length=2048)
    html = models.JSONField()
    request = models.OneToOneField(PageRequest, on_delete=models.CASCADE)
    request_result = models.JSONField()
    child_pages = models.ForeignKey("ScrapedPage", on_delete=models.CASCADE)

    def __str__(self):
        return self.url

    @classmethod
    def create(cls, src_dict):
        url = src_dict["url"]
        html = src_dict["html"]
        request_result_json = json.dumps(src_dict["result"])
        request_obj = PageRequest.create(src_dict)
        #TODO child pages
        return cls(url=url, html=html, request=request_obj, request_result=request_result_json)

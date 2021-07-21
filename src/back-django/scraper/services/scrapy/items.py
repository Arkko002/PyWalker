import scrapy

class GenericPage(scrapy.Item):
    id = scrapy.Field()
    url = scrapy.Field()
    body = scrapy.Field()


class MorelePage(GenericPage):
    item_name = scrapy.Field()
    category = scrapy.Field()
    price = scrapy.Field()
    discount = scrapy.Field()

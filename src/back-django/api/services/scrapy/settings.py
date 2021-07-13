from .pipelines import PostgresPipeline

LOG_FILE = "scrapy-logs.txt"

ITEM_PIPELINES = {
    PostgresPipeline: 5
}

SPIDER_MIDDLEWARES = {
}

DB_URI = "dbname=scraper_api host=localhost user=webwalker password=test"

# TODO Db connection uri
# TODO Setup Proxy config
# TODO Setup UserAgent spoofing config
# TODO https://docs.scrapy.org/en/latest/topics/practices.html#avoiding-getting-banned

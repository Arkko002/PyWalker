from itemloaders.processors import TakeFirst
from scrapy.loader import ItemLoader

# TODO pass response (default_selector_class)
class PageLoader(ItemLoader):
    default_output_processor = TakeFirst()


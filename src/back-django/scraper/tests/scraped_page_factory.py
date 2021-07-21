import dominate
from dominate.tags import *
import factory
from scraper_api.models import ScrapedPage


class ScrapedPageFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = ScrapedPage

    doc = dominate.document()

    with doc.head:
        meta(charset="UTF-8")
        title("Test HTML Page")

    with doc:
        with div(id="list").add(ul(cls="list-class")):
            for item in ["item1", "item2", "item3"]:
                li(a(item.title(), href="/%s.html" % item))

        with div(id="address").add(address(cls="address-class")):
            "Fake Str 123, Citytown"
            "USA"

        with div(id="table").add(table(cls="table-class")):
            caption("Table Caption")
            with tr():
                for item in ["table1", "table2", "table3"]:
                    th(item)

        button(cls="button-class")
        input_(type="button", cls="button-input-class")

        with select(id="select"):
            for item in ["option1", "option2", "option3"]:
                option(value=item)

    url = "http://www.testurl.com"
    html = doc
    result = #TODO
    request = #TODO



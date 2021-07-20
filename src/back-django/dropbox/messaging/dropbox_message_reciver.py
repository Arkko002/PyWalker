import pika
from django.apps import apps
from ..models import ScraperDropboxSession

class MessageReceiver:
    def __init__(self) -> None:
        scraped_page = apps.get_model("scraper.ScrapedPage")

    def __enter__(self):
        self.connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue="dropbox", durable=True)
        self.channel.basic_consume(queue="dropbox", on_message_callback=self.__callback__, auto_ack=True)
        self.channel.start_consuming()

        return self

    def __callback__(self, ch, method, properties, body):


        ch.basic_ack(delivery_tag = method.delivery_tag)

    def __exit__(self):
        self.connection.close()

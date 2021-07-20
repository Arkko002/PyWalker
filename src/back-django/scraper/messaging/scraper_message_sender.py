import pika
from queue import Queue
from concurrent.futures import ThreadPoolExecutor


class ScraperMessageSender:
    def __init__(self) -> None:
        self.connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
        self.channel = self.connection.channel()

    def start_dropbox_publishing(self, message_queue: Queue):
        self.channel.queue_declare(queue="dropbox", durable=True)

        with ThreadPoolExecutor(max_workers=1) as executor:
            self.dropbox_future = executor.submit(self.__publish_to_queue, "dropbox", message_queue)

    def __publish_to_queue(self, queue_name: str, message_queue: Queue):
        while True:
            message = message_queue.get()

            self.channel.basic_publish(
                exchange="",
                routing_key=queue_name,
                body=message,
                properties=pika.BasicProperties(
                    delivery_mode=2,
                )
            )

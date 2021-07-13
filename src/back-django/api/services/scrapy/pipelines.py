import psycopg2

class PostgresPipeline:
    def __init__(self, db_uri) -> None:
        self.db_uri = db_uri

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            db_uri = crawler.settings.get("DB_URI")
        )

    def open_spider(self, spider):
        try:
            self.db = psycopg2.connect(self.db_uri)
            self.cur = self.db.cursor()

            self.cur.execute("CREATE TABLE IF NOT EXISTS pages(\
                                 id serial PRIMARY KEY,\
                                 url text,\
                                 html jsonb\
                                 parsed jsonb\
                                )")
        except psycopg2.DatabaseError:
            # TODO 
            pass

    def close_spider(self, spider):
        if self.db is not None:
            self.db.close()
            self.cur.close()

    def process_item(self, item, spider):
        try:
            self.cur.execute("INSERT INTO pages (url, html, parsed) VALUES (%s, %s, %s)", (item.url, item.html, item.parsed))
            self.db.commit()
        except psycopg2.DatabaseError:
            # TODO
            pass


from celery import Celery
from .config import Config
from .connect import connect_db
from flask import Flask


def create_worker():
    app = Flask(__name__)
    connect_db.init_app(app, uri=Config.MONGO_URI)
    _celery = Celery(__name__, broker=Config.BROKER_URL, backend=Config.BROKER_URL)
    _celery.conf.update(Config.__dict__)
    return _celery

worker = create_worker()
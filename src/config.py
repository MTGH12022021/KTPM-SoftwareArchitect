# -*- coding: utf-8 -*-
"""
   Description:
        -
        -
"""
import os


class Config:
    MONGO_URI = os.getenv("MONGO_URI")

    BROKER_URL = os.getenv("BROKER_URL")

    CELERY_ROUTES = { 
        "worker.rides": {"queue": "rides"},
    }

    CELERY_IMPORTS = ["src.tasks"]
    CELERY_RESULT_BACKEND = "rpc://"
    CELERY_TRACK_STARTED = True
    CELERY_RESULT_PERSISTENT = True
    SENTRY_DSN = os.getenv("SENTRY_DSN")

    URL_SERVER = os.getenv("URL_SERVER")
    URL_SERVER_STATUS = os.getenv("URL_SERVER_STATUS")

    REDIS_HOST = os.getenv("REDIS_HOST")
    REDIS_PORT = os.getenv("REDIS_PORT")
    REDIS_DB = os.getenv("REDIS_DB")


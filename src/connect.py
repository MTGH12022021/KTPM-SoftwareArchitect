# -*- coding: utf-8 -*-
"""
   Description:
        -
        -
"""

from .config import Config

from .lib import HTTPSecurity
from flask_pymongo import PyMongo
from redis import Redis
from web3 import Web3
import json

connect_db = PyMongo()

redis = Redis(
    host=Config.REDIS_HOST,
    port=Config.REDIS_PORT,
    decode_responses=True,
    db=Config.REDIS_DB
)

security = HTTPSecurity(redis=redis, auth_address='')

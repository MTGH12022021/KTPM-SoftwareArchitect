from flask_restful import Resource
from ..connect import security, redis
import json

class OngoingAPI(Resource):

    @security.http()
    def get(self):
        keys = redis.lrange("booking", 0, -1)
        return [json.loads(redis.get(item)) for item in keys]

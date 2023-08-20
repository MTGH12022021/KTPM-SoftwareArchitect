from ..worker import worker
from bson.objectid import ObjectId
from celery.backends.rpc import RPCBackend
from ..connect import redis
from pymongo.errors import PyMongoError
from src.lib.exception import NotFound
from src.models import rides_model
import traceback
from geopy.geocoders import Nominatim
import requests
import json

@worker.task(name="worker.rides", rate_limit="1000/s", backend=RPCBackend(app=worker))
def rides(user_name, phone, pick_up_address, type_car, plugin=False):
    try:
        if not rides_model.find_one({"phone": phone, "pick_up_address": pick_up_address}):
            params = {
                "key": "lYCPmdegPpRgc8Phv3J9dBHWr8KooMLc",
                "location": pick_up_address
            }
            if not plugin:
                response = requests.get(
                    "https://www.mapquestapi.com/geocoding/v1/address", params=params).json()
            else:
                return                

            rides_model.insert_one({
                "user_name": user_name,
                "phone": phone,
                "pick_up_address": pick_up_address,
                "type_car": type_car,
                "created_by": "Call center",
                "GPS": response["results"][0]["locations"][0]
            })

        ride_user = rides_model.find_one({"phone": phone, "pick_up_address": pick_up_address})
        redis.rpush("booking", str(ride_user.get("_id")))

        redis_store = {
            "user_name": ride_user.get("user_name"),
            "phone": ride_user.get("phone"),
            "address": ride_user.get("pick_up_address"),
            "type_car": ride_user.get("type_car"),
            "user_name_driver": "ntloi",
            "displayLatLng": {
                "lat": ride_user.get("GPS").get("displayLatLng").get("lat"),
                "lng": ride_user.get("GPS").get("displayLatLng").get("lng")
            },
            "phone_driver": "0123456789", 
        }
        redis.set(str(ride_user.get("_id")), json.dumps(redis_store)) 
        result = redis.get(str(ride_user.get("_id")))

    except Exception as e: 
        traceback.print_exc()
        raise 
    return "success"
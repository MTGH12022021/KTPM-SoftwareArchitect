# -*- coding: utf-8 -*-
"""
   Description:
        - 
        -
"""
from src.resources.hello import HelloWorldAPI
from src.resources.rides import RidesAPI
from src.resources.ongoing import OngoingAPI

api_resources = {
    "/hello": HelloWorldAPI,
    "/rides": RidesAPI,
    "/ongoing-rides": OngoingAPI
}
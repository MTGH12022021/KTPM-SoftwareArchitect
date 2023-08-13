
from flask_restful import Resource
from ..connect import security
from src.schemas.rides import RidesSchema
from src.tasks.rides import rides

class RidesAPI(Resource):
    @security.http(
        form_data=RidesSchema(),  # form_data
        # login_required=True  # user
    )
    def post(self, form_data, user=None):
        rides.delay(**form_data)
        return form_data.get("hello")

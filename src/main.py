from flask_restful import Api
from flask import Flask
from .connect import connect_db
from .config import Config
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration
from flask_cors import CORS

app = Flask(__name__)

api = Api(app)

CORS(app, resources={r"*": {"origins": "*"}})


@app.errorhandler(404)
def page_not_found(error):
    return {
        "msg": "The requested URL was not found on the server.",
            "data": {},
            "errors": [],
            "error_code": "E_NOT_FOUND"
    }, 404


@app.errorhandler(500)
def server_error_page(error):
    return {
        "msg": "Internal Server Error",
            "data": {},
            "errors": [],
            "error_code": "E_SERVER"
    }, 500

connect_db.init_app(app, Config.MONGO_URI)

if Config.SENTRY_DSN:
    sentry_sdk.init(
        dsn=Config.SENTRY_DSN,
        integrations=[FlaskIntegration()],
        server_name=Config.PROJECT
    )
from .resources import api_resources

# Add resource
for prefix, _resource in api_resources.items():
    api.add_resource(_resource, prefix)

# if __name__ == '__main__':
#     app.run(debug=True, port=5005, host='0.0.0.0')

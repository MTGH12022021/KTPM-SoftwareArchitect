from marshmallow import Schema, EXCLUDE, RAISE, fields

class HelloSchema(Schema):
    hello = fields.Str(required=True)
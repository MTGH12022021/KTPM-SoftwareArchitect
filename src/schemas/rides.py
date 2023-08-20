from marshmallow import Schema, EXCLUDE, RAISE, fields

class RidesSchema(Schema):
    user_name = fields.Str(required=True)
    phone = fields.Str(required= True)
    pick_up_address = fields.Str(required=True)
    type_car = fields.Str(required= True)
    plugin = fields.Bool(require= False)
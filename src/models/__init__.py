# -*- coding: utf-8 -*-
"""
   Description:
        -
        -
"""
from src.lib.dao import DaoModel
from src.connect import connect_db

rides_model = DaoModel(connect_db.db.rides)


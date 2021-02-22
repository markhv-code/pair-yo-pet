from .db import db


class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    petType = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    imageURL = db.Column(db.String(2083), nullable=False)
    energy = db.Column(db.Integer, nullable=False)
    social = db.Column(db.Integer, nullable=False)
    behaved = db.Column(db.Integer, nullable=False)
    size = db.Column(db.Integer, nullable=False)
    env = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(500), nullable=False)

from flask import Blueprint
from app.models import Pet, db

browse_routes = Blueprint("browse", __name__)


@browse_routes.route("")
def browse_pets():
    """
    Browse all pets
    """
    pets = Pet.query.all()
    return {"pets": [pet.to_dict() for pet in pets]}
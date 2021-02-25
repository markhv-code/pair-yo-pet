from flask import Blueprint, jsonify, request
from flask_login import login_required
from werkzeug.utils import secure_filename

from app.helpers import upload_file_to_s3
from app.models import Pet, db
from app.forms import CreatePetForm
from app.api.auth_routes import validation_errors_to_error_messages

pet_routes = Blueprint("pets", __name__)


@pet_routes.route("")
# @login_required
def get_pets():
    """
    Get all pets
    """
    pets = Pet.query.all()
    return {"pets": [pet.to_dict() for pet in pets]}


@pet_routes.route("", methods=["POST"])
@login_required
def create_pet():
    """
    Create new pet
    """
    print("---------- here is the image ----------", request.files["image"])
    image = request.files["image"]
    image.filename = secure_filename(image.filename)
    output_link = upload_file_to_s3(image)
    print("-----------------link here----------------------", output_link)

    form = CreatePetForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_pet = Pet(
            userId=form.data["userId"],
            name=form.data["name"],
            petType=form.data["petType"],
            age=form.data["age"],
            imageURL=output_link,
            energy=form.data["energy"],
            social=form.data["social"],
            behaved=form.data["behaved"],
            size=form.data["size"],
            env=form.data["env"],
            description=form.data["description"],
        )
        db.session.add(new_pet)
        db.session.commit()
        return new_pet.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}

import re

from flask import Blueprint, jsonify, request
from flask_login import login_required
from werkzeug.utils import secure_filename

from app.helpers import upload_file_to_s3
from app.models import Pet, db
from app.forms import CreatePetForm
from app.api.auth_routes import validation_errors_to_error_messages

pet_routes = Blueprint("pets", __name__)


@pet_routes.route("")
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
    form = CreatePetForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    image_error = []
    image = request.files.get("image", None)

    if image != None:
        image.filename = secure_filename(image.filename)
        pattern = re.compile(".*(apng|avif|jpe?g|png|svg|webp)$", re.IGNORECASE)
        is_image = bool(pattern.match(image.mimetype))
        if not is_image:
            image_error.append(
                "Upload must be an image (apng, avif, jpeg/jpg, png, svg, webp)."
            )

    if form.validate_on_submit() and not image_error:

        output_link = (
            upload_file_to_s3(image)
            if image
            else "https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/pre-saved-images/default-dog.png"
        )

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

    errors = validation_errors_to_error_messages(form.errors)
    errors += image_error

    return {"errors": errors}


@pet_routes.route("/<petId>", methods=["PUT"])
@login_required
def update_pet(petId):
    """
    Update pet
    """
    form = CreatePetForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    image_error = []
    image = request.files.get("image", None)

    pet_to_update = Pet.query.get(petId)

    print("pet to update ------------------ ", pet_to_update.to_dict())

    pet_to_update.name = form.data["name"]
    pet_to_update.petType = form.data["petType"]
    pet_to_update.age = form.data["age"]
    pet_to_update.energy = form.data["energy"]
    pet_to_update.social = form.data["social"]
    pet_to_update.behaved = form.data["behaved"]
    pet_to_update.size = form.data["size"]
    pet_to_update.env = form.data["env"]
    pet_to_update.description = form.data["description"]

    if image is not None:
        image.filename = secure_filename(image.filename)
        pattern = re.compile(".*(apng|avif|jpe?g|png|svg|webp)$", re.IGNORECASE)
        is_image = bool(pattern.match(image.mimetype))
        if not is_image:
            image_error.append(
                "Upload must be an image (apng, avif, jpeg/jpg, png, svg, webp)."
            )

    if form.validate_on_submit() and not image_error:

        output_link = upload_file_to_s3(image) if image else None

        if output_link:
            pet_to_update.imageURL = output_link

        print("updated pet ------------------ ", pet_to_update.to_dict())

        db.session.add(pet_to_update)
        db.session.commit()
        return pet_to_update.to_dict()

    errors = validation_errors_to_error_messages(form.errors)
    errors += image_error

    return {"errors": errors}


@pet_routes.route("/<petId>", methods=["DELETE"])
@login_required
def delete_pet(petId):
    """
    Delete pet
    """
    pet_to_delete = Pet.query.get(petId)
    if pet_to_delete:
        db.session.delete(pet_to_delete)
        db.session.commit()
        return "Deleted"
    else:
        print(f"-------- no pet found with id {petId} -------- ")
        return {"errors": "No pet found with given id"}

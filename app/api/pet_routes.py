from flask import Blueprint, jsonify

# from flask_login import login_required
from app.models import Pet

pet_routes = Blueprint("pets", __name__)


# get all pets
@pet_routes.route("/")
# @login_required
def get_pets():
    pets = Pet.query.all()
    return {"pets": [pet.to_dict() for pet in pets]}


# @pet_routes.route("/<int:id>")
# # @login_required
# def pet(id):
#     pet = Pet.query.get(id)
#     return pet.to_dict()

@pet_routes.route("/", methods=["POST"])
def create_pet():
    pass

# @app.route("/simple-form", methods=["POST"])
# def simple_form_post():
#     form = SimpleForm()
#     if form.validate_on_submit():
#         new_person = SimplePerson(
#             name=form.data["name"],
#             age=form.data["age"],
#             bio=form.data["bio"],
#         )
#         db.session.add(new_person)
#         db.session.commit()
#         return redirect("/")
#     return "Bad Data"
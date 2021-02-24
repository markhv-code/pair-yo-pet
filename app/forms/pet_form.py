from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange
from app.models import Pet


class CreatePetForm(FlaskForm):
    userId = IntegerField(
        "userId", validators=[DataRequired(message="Must associate an owner")]
    )
    name = StringField(
        "name",
        validators=[
            DataRequired(message="Must provide pet name"),
            Length(min=1, max=50, message="Name must be less than 50 characters"),
        ],
    )
    petType = StringField(
        "petType",
        validators=[
            DataRequired(message="Must specify pet type"),
            Length(min=1, max=50, message="Pet type must be less than 50 characters"),
        ],
    )
    age = IntegerField(
        "age",
        validators=[
            DataRequired(message="Must provide an age"),
            NumberRange(min=0, max=50, message="Age must be between 0 and 50"),
        ],
    )
    imageURL = StringField(
        "imageURL",
        validators=[
            DataRequired(message="Must upload an image"),
        ],
    )
    energy = IntegerField(
        "energy",
        validators=[
            DataRequired(message="Must specify energy level"),
            NumberRange(min=1, max=5, message="Energy must be between 1 and 5"),
        ],
    )
    social = IntegerField(
        "social",
        validators=[
            DataRequired(message="Must specify social level"),
            NumberRange(min=1, max=5, message="Social must be between 1 and 5"),
        ],
    )
    behaved = IntegerField(
        "behaved",
        validators=[
            DataRequired(message="Must specify behavior level"),
            NumberRange(min=1, max=5, message="Behavior must be between 1 and 5"),
        ],
    )
    size = IntegerField(
        "size",
        validators=[
            DataRequired(message="Must specify size"),
            NumberRange(min=1, max=3, message="Size must be between 1 and 3"),
        ],
    )
    env = IntegerField(
        "env",
        validators=[
            DataRequired(message="Must specify environment"),
            NumberRange(min=1, max=3, message="Environment must be between 1 and 3"),
        ],
    )
    description = StringField(
        "description",
        validators=[
            DataRequired(message="Must include pet description"),
            Length(
                min=1,
                max=500,
                message="Pet description must be less than 500 characters",
            ),
        ],
    )
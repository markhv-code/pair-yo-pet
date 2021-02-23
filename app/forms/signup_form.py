from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo
from app.models import User


def user_exists(form, field):
    print("Checking if user exists", field.data)
    data = field.data
    user = User.query.filter(User.username == data).first()
    if user:
        raise ValidationError("Username is already registered.")


def email_exists(form, field):
    data = field.data
    email = User.query.filter(User.email == data).first()
    if email:
        raise ValidationError("Email is already registered.")

class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(message='Username must be between 1 and 30 characters.'),user_exists])
    email = StringField('email', validators=[DataRequired(
        message='Must input valid email!'), Email(message='Must input valid email!'), email_exists])
    password = StringField('password', validators=[DataRequired(), EqualTo('repeat_password', message='Passwords must match')])
    city = StringField('city', validators=[DataRequired()])
    stateAbbr = StringField('stateAbbr', validators=[DataRequired(), Length(
        min=2, max=2, message='Must provide a two letter state abbreviation.')])
    repeat_password = StringField("Repeat Password")

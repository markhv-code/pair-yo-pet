from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SelectField
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
    states = [
        ("AK","AK"), ("AL","AL"), ("AR","AR"), ("AZ","AZ"), ("CA","CA"), ("CO","CO"), ("CT","CT"), ("DE","DE"), ("FL","FL"), ("GA","GA"), ("HI","HI"), ("IA","IA"), ("ID","ID"), ("IL","IL"), ("IN","IN"),
        ("KS","KS"), ("KY","KY"), ("LA","LA"), ("MA","MA"), ("MD","MD"), ("ME","ME"), ("MI","MI"), ("MN","MN"), ("MO","MO"), ("MS","MS"), ("MT","MT"), ("NC","NC"), ("ND","ND"), ("NE","NE"), ("NH","NH"),
        ("NJ","NJ"), ("NM","NM"), ("NV","NV"), ("NY","NY"), ("OH","OH"), ("OK","OK"), ("OR","OR"), ("PA","PA"), ("RI","RI"), ("SC","SC"), ("SD","SD"), ("TN","TN"), ("TX","TX"), ("UT","UT"), ("VA","VA"),
        ("VT","VT"), ("WA","WA"), ("WI","WI"), ("WV","WV"), ("WY","WY")]

    username = StringField('username', validators=[DataRequired(message='Username must be between 1 and 30 characters.'),user_exists])
    email = StringField('email', validators=[DataRequired(
        message='Must input valid email!'), Email(message='Must input valid email!'), email_exists])
    city = StringField('city', validators=[DataRequired()])
    stateAbbr = SelectField('stateAbbr', choices=states)
    # stateAbbr = StringField('stateAbbr', validators=[DataRequired(), Length(
        # min=2, max=2, message='Must provide a two letter state abbreviation.')])
    password = PasswordField('password', validators=[DataRequired()])

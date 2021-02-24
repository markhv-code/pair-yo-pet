from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class SearchForm(FlaskForm):
    search = StringField, IntegerField('search', validators=[DataRequired()])
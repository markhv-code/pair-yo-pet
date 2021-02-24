from flask import Blueprint
from flask_login import current_user
from app.models import Pet
from app.forms import SearchForm

browse_routes = Blueprint('browse', __name__)


@browse_routes('/search', methods=['GET', 'POST'])
def search():
    form = SearchForm()
    if form.validate_on_submit():
        search_term = form.query.data



@browse_routes('/results')
def browse_results(browse):
    results = []
    pets = Pet.query.filter_by(name=)
  

    if (current_user):
       


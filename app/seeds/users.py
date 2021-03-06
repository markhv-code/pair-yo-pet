from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user
def seed_users():

    users = [
        User(
            username="Demo",
            email="demo@aa.io",
            password="password",
            city="Salt Lake",
            stateAbbr="UT",
        ),
        User(
            username="Demo2",
            email="demo2@aa.io",
            password="password",
            city="Provo",
            stateAbbr="UT",
        ),
        User(
            username="Lisa",
            email="Lisa@aa.io",
            password="password",
            city="Baltimore",
            stateAbbr="MD",
        ),
        User(
            username="Sky",
            email="sky@aa.io",
            password="password",
            city="Chicago",
            stateAbbr="IL",
        ),
        User(
            username="hellooo",
            email="helloo@aa.io",
            password="password",
            city="Salt Lake",
            stateAbbr="UT",
        ),
        User(
            username="maya",
            email="maya@aa.io",
            password="password",
            city="Morland",
            stateAbbr="KS",
        ),
        User(
            username="India",
            email="india@aa.io",
            password="password",
            city="Big Sur",
            stateAbbr="CA",
        ),
        User(
            username="Madellin",
            email="Madellin@aa.io",
            password="password",
            city="Colombia",
            stateAbbr="MD",
        ),
        User(
            username="Alaska",
            email="Alaska@aa.io",
            password="password",
            city="Big Sur",
            stateAbbr="CA",
        ),
        User(
            username="Cecily",
            email="Cecily@aa.io",
            password="password",
            city="Provo",
            stateAbbr="UT",
        ),
        User(
            username="Zaki",
            email="zaki@aa.io",
            password="password",
            city="Bloomington",
            stateAbbr="ID",
        ),
        User(
            username="Minerva",
            email="minerva@aa.io",
            password="password",
            city="Under the sea",
            stateAbbr="TP",
        ),
        User(
            username="Zoe",
            email="zoe@aa.io",
            password="password",
            city="Baltimore",
            stateAbbr="MD",
        ),
        User(
            username="Pillsbury",
            email="Pillsbury@aa.io",
            password="password",
            city="Halmond",
            stateAbbr="ID",
        ),
        User(
            username="Joe",
            email="Joe@aa.io",
            password="password",
            city="Salt Lake",
            stateAbbr="UT",
        ),
        User(
            username="Kennedy",
            email="Kennedy@aa.io",
            password="password",
            city="Fizzball",
            stateAbbr="NJ",
        ),
        User(
            username="Jesse",
            email="jesse@aa.io",
            password="password",
            city="Newark",
            stateAbbr="NJ",
        ),
        User(
            username="Malcolm",
            email="Malcolm@aa.io",
            password="password",
            city="Newark",
            stateAbbr="NJ",
        ),
        User(
            username="Rebecca",
            email="Rebecca@aa.io",
            password="password",
            city="Newark",
            stateAbbr="NJ",
        ),
        User(
            username="Aniya",
            email="Aniya@aa.io",
            password="password",
            city="Newark",
            stateAbbr="NJ",
        ),
        User(
            username="Jeff",
            email="jeff@aa.io",
            password="password",
            city="Milwaukee",
            stateAbbr="WI",
        ),
        User(
            username="Rapunzel",
            email="rap@unzel.com",
            password="password",
            city="Carona",
            stateAbbr="HI",
        ),
        User(
            username="Koga",
            email="koga@elite4.com",
            password="password",
            city="Fuchsia City",
            stateAbbr="NY",
        ),
        User(
            username="Amanda",
            email="amanda@ohyeah.com",
            password="password",
            city="Murrieta",
            stateAbbr="CA",
        ),
        User(
            username="Splinter",
            email="master@tmnt.com",
            password="password",
            city="New York City",
            stateAbbr="NY",
        ),
        User(
            username="Mark",
            email="mark@mark.com",
            password="password",
            city="Waimea",
            stateAbbr="HI",
        ),
        User(
            username="Andy",
            email="andy@mouserat.com",
            password="password",
            city="Pawnee",
            stateAbbr="IN",
        ),
        User(
            username="Shrek",
            email="shrek@ogre.com",
            password="password",
            city="Far Far Away",
            stateAbbr="OH",
        ),
        User(
            username="Charlotte",
            email="char@webspinner.com",
            password="password",
            city="Brooklin",
            stateAbbr="ME",
        ),
        User(
            username="Ned",
            email="ned@flanders.com",
            password="password",
            city="Springfield",
            stateAbbr="MA",
        ),
        User(
            username="Peter",
            email="peter@aa.com",
            password="password",
            city="Corpus Christi",
            stateAbbr="TX",
        ),
        User(
            username="Gus",
            email="gus@hilife.com",
            password="password",
            city="San Clemente",
            stateAbbr="CA",
        ),
        User(
            username="Ellie",
            email="ellie@design.com",
            password="password",
            city="Tucson",
            stateAbbr="AZ",
        ),
        User(
            username="Kelly",
            email="kelly@wsl.com",
            password="password",
            city="Fort Lauderdale",
            stateAbbr="FL",
        ),
        User(
            username="Gabe",
            email="gabe@wsl.com",
            password="password",
            city="Los Angeles",
            stateAbbr="CA",
        ),
        User(
            username="Shelly",
            email="shelly@shelly.com",
            password="password",
            city="Los Angeles",
            stateAbbr="CA",
        ),
        User(
            username="Rob",
            email="rob@rob.com",
            password="password",
            city="Los Angeles",
            stateAbbr="CA",
        ),
        User(
            username="Star",
            email="star@wsl.com",
            password="password",
            city="Los Angeles",
            stateAbbr="CA",
        ),
        User(
            username="Dwarf",
            email="dwarf@snowwhite.com",
            password="password",
            city="Los Angeles",
            stateAbbr="CA",
        ),
        User(
            username="Biggie",
            email="biggie@smalls.com",
            password="password",
            city="Los Angeles",
            stateAbbr="CA",
        ),
    ]

    db.session.bulk_save_objects(users)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute("TRUNCATE users CASCADE;")
    db.session.commit()

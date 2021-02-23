from app.models import db, Pet

# Adds a demo user
def seed_pets():

    pets = [
        Pet(
            userId=16,
            name="Bruno",
            petType="Dog",
            age=7,
            imageURL="https://upload.wikimedia.org/wikipedia/commons/2/27/Finnish_Spitz_600.jpg",
            energy=5,
            social=5,
            behaved=5,
            size=2,
            env=3,
            description="Bruno is a Finnish Spitz who love people and other dogs. He respects all creatures alike, wouldn't harm even his own fleas.",
        ),
    ]

    db.session.bulk_save_objects(pets)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_pets():
    db.session.execute("TRUNCATE pets;")
    db.session.commit()

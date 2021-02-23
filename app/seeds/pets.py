from app.models import db, Pet, User

# Adds a demo user
def seed_pets():

    user1 = User.query.filter_by(username="Demo").first()
    user2 = User.query.filter_by(username="Demo2").first()
   
    bruno = Pet(
                owner=user1,
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
        )
    cal = Pet(
            owner=user2,
            name="Cal",
            petType="Dog",
            age=6,
            imageURL="https://cdn.orvis.com/images/DBS_Akita_1280.jpg",
            energy=5,
            social=5,
            behaved=5,
            size=2,
            env=3,
            description="Cal is a sweetheart, super-active, and he prefers to be outside, but I keep him inside because I want all his attention!",
        )

    bruno.bst_frnds.append(cal)

    # db.session.bulk_save_objects([bruno, cal])
    db.session.add(bruno)
    db.session.add(cal)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_pets():
    db.session.execute("TRUNCATE pets CASCADE;")
    db.session.commit()

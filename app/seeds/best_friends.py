from app.models import db, best_friends

# Adds a demo user
def seed_best_friends():

    bst_frnds = [
        best_friends(
            frmBFPetId=1,
            toBFPetId=2,
        ),
    ]

    db.session.bulk_save_objects(bst_frnds)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_best_friends():
    db.session.execute("TRUNCATE best_friends;")
    db.session.commit()

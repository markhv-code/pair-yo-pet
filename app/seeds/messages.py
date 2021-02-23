from app.models import db, Message

# Adds a demo user
def seed_messages():

    messages = [
        Message(
            senderId=2,
            receiverId=1,
            message="I love your dog Bruno",
        ),
    ]

    db.session.bulk_save_objects(messages)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_messages():
    db.session.execute("TRUNCATE messages;")
    db.session.commit()

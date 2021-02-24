from app.models import db, Message, User

# Adds a demo user
def seed_messages():

    user1 = User.query.filter_by(username="Demo").first()
    user2 = User.query.filter_by(username="Demo2").first()

    messages = [
        Message(
            senderId=user2.id,
            receiverId=user1.id,
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

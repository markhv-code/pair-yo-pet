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
        Message(
            senderId=user1.id,
            receiverId=user2.id,
            message="Thank you! I really love Bruno also!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user2.id,
            message="When is a good time to hang out!",
        ),
        Message(
            senderId=user2.id,
            receiverId=user1.id,
            message="After I finish my group project!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user2.id,
            message="Sounds great brahhhh!",
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

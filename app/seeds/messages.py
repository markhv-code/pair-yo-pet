from app.models import db, Message, User

# Adds a demo user
def seed_messages():

    user1 = User.query.filter_by(username="Demo").first()
    user2 = User.query.filter_by(username="Demo2").first()
    user3 = User.query.filter_by(username="Lisa").first()
    user5 = User.query.filter_by(username="Sky").first()
    user6 = User.query.filter_by(username="India").first()
    user7 = User.query.filter_by(username="Cecily").first()
    user8 = User.query.filter_by(username="Jesse").first()
    user9 = User.query.filter_by(username="Kennedy").first()
    user10 = User.query.filter_by(username="Malcolm").first()
    user11 = User.query.filter_by(username="Jeff").first()
    user12 = User.query.filter_by(username="Aniya").first()

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
            message="When is a good time to hang out?",
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
        Message(
            senderId=user3.id,
            receiverId=user1.id,
            message="Wow you have the most beautiful dog!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user3.id,
            message="Thanks! They are a handful sometimes, but I love them!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user3.id,
            message="Would you like to meet up?",
        ),
        Message(
            senderId=user3.id,
            receiverId=user1.id,
            message="Yeah! Does tomorrow night work for you?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user3.id,
            message="For sure, we would love to. 6pm at the dog park?",
        ),
        Message(
            senderId=user3.id,
            receiverId=user1.id,
            message="Yes! We will see you there.",
        ),
        Message(
            senderId=user4.id,
            receiverId=user1.id,
            message="Your puppy reminds me of my dog when he was little!!!!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user4.id,
            message="ahhh how precious! They are super adorable!",
        ),
        Message(
            senderId=user4.id,
            receiverId=user1.id,
            message="yes! Gotta love them while they are still small!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user5.id,
            message="Your dog reminds me of the move 'Marley and Me'!",
        ),
        Message(
            senderId=user5.id,
            receiverId=user1.id,
            message="LOL thanks! That is super funny!",
        ),
        Message(
            senderId=user5.id,
            receiverId=user1.id,
            message="What sort of activities does your dog like to do?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user5.id,
            message="Oh he loves the water, we take him to the lake usually on the weekends!",
        ),
        Message(
            senderId=user5.id,
            receiverId=user1.id,
            message="Oh no way! So does my dog! Let go this weekend together!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user5.id,
            message="Yeah I'm totally down!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user6.id,
            message="I feel like our dogs are meant to be together!",
        ),
        Message(
            senderId=user6.id,
            receiverId=user1.id,
            message="That's so funny because right when I was your dog, I had the same feeling!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user6.id,
            message="Wow that's so crazy! Let's meet up tonight!",
        ),
        Message(
            senderId=user7.id,
            receiverId=user1.id,
            message="I just have to say, that I think you have the most beautiful dog in the whole wide world!",
        ),
        Message(
            senderId=user7.id,
            receiverId=user1.id,
            message="ahhhhh thank you, that really warmed my soul",
        ),
        Message(
            senderId=user7.id,
            receiverId=user1.id,
            message="I think you have an equally beautiful dog too!",
        ),
        Message(
            senderId=user8.id,
            receiverId=user1.id,
            message="What are the exact specifications of your dog?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user8.id,
            message="He ways 90lbs, snores super load, and chews up all my shoes!",
        ),
        Message(
            senderId=user8.id,
            receiverId=user1.id,
            message="Wow ok, yeah. I wish you the best of luck with that!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user8.id,
            message="Thanks I'm gonna need it!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user9.id,
            message="Let's hang out with our doggos next Thursday afternoon?!",
        ),
        Message(
            senderId=user10.id,
            receiverId=user1.id,
            message="Is your dog currently in optimal health?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user10.id,
            message="No, it has been feeling a little under the weather recently.",
        ),
        Message(
            senderId=user10.id,
            receiverId=user1.id,
            message="Ok I see. If you want I can bring my dog over for some little doggo cheer?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user10.id,
            message="Wow that would be awesome! Can you come over in the next hour?",
        ),
        Message(
            senderId=user10.id,
            receiverId=user1.id,
            message="Sure! See you soon!",
        ),
        Message(
            senderId=user11.id,
            receiverId=user1.id,
            message="Please let's get our dogs to hang out together?! I think they would have so much fun!",
        ),
        Message(
            senderId=user1.id,
            receiverId=user12.id,
            message="Knock knock",
        ),
        Message(
            senderId=user12.id,
            receiverId=user1.id,
            message="Who's there?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user12.id,
            message="Hugh",
        ),
        Message(
            senderId=user12.id,
            receiverId=user1.id,
            message="Hugh who?",
        ),
        Message(
            senderId=user1.id,
            receiverId=user12.id,
            message="Who's a good dog??? Me right???",
        ),
        Message(
            senderId=user12.id,
            receiverId=user1.id,
            message="Wow that joke was a bit ruff, ruff...",
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

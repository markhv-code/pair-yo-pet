from app.models import db, Pet, User

# Adds a demo user
def seed_pets():

    user1 = User.query.filter_by(username="Demo").first()
    user2 = User.query.filter_by(username="Demo2").first()
    user3 = User.query.filter_by(username="Lisa").first()
    user4 = User.query.filter_by(username="Sky").first()
    user5 = User.query.filter_by(username="hellooo").first()
    user6 = User.query.filter_by(username="maya").first()
    user7 = User.query.filter_by(username="India").first()
    user8 = User.query.filter_by(username="Madellin").first()
    user9 = User.query.filter_by(username="Alaska").first()
    user10 = User.query.filter_by(username="Cecily").first()
    user11 = User.query.filter_by(username="Zaki").first()
    user12 = User.query.filter_by(username="Minerva").first()
    user13 = User.query.filter_by(username="Zoe").first()
    user14 = User.query.filter_by(username="Pillsbury").first()
    user15 = User.query.filter_by(username="Joe").first()
    user16 = User.query.filter_by(username="Kennedy").first()
    user17 = User.query.filter_by(username="Jesse").first()
    user18 = User.query.filter_by(username="Malcolm").first()
    user19 = User.query.filter_by(username="Aniya").first()
    user20 = User.query.filter_by(username="Jeff").first()
    rapunzel = User.query.filter_by(username="Rapunzel").first()
    koga = User.query.filter_by(username="Koga").first()
    amanda = User.query.filter_by(username="Amanda").first()
    splinter = User.query.filter_by(username="Splinter").first()
    mark = User.query.filter_by(username="Mark").first()
    andy = User.query.filter_by(username="Andy").first()
    shrek = User.query.filter_by(username="Shrek").first()
    charlotte = User.query.filter_by(username="Charlotte").first()
    ned = User.query.filter_by(username="Ned").first()
    gus = User.query.filter_by(username="Gus").first()
    kelly = User.query.filter_by(username="Kelly").first()
    gabe = User.query.filter_by(username="Gabe").first()
    peter = User.query.filter_by(username="Peter").first()
    ellie = User.query.filter_by(username="Ellie").first()
    shelly = User.query.filter_by(username="Shelly").first()
    rob = User.query.filter_by(username="Rob").first()
    star = User.query.filter_by(username="Star").first()
    dwarf = User.query.filter_by(username="Dwarf").first()
    biggie = User.query.filter_by(username="Biggie").first()


    # ----------- Dog here -----------
    bruno = Pet(
        owner=user1,
        name="Bruno",
        petType="Dog",
        age=7,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/Finnish_Spitz_600.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=2,
        env=3,
        description="Bruno is a Finnish Spitz who loves people and other dogs. He respects all creatures alike, wouldn't harm even his own fleas.",
    )
    cal = Pet(
        owner=user2,
        name="Cal",
        petType="Dog",
        age=6,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/Akita.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=2,
        env=3,
        description="Cal is a sweetheart, super-active, and he prefers to be outside, but I keep him inside because I want all his attention!",
    )
    mylo = Pet(
        owner=user3,
        name="Mylo",
        petType="Dog",
        age=1,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/dog-1246610_640.jpg",
        energy=3,
        social=2,
        behaved=1,
        size=1,
        env=3,
        description="Look at my cute face. I love going for long walks and seeing all the world has to offer.",
    )
    melody = Pet(
        owner=user4,
        name="Melody",
        petType="Dog",
        age=5,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/dog-3139757_640.jpg",
        energy=4,
        social=3,
        behaved=5,
        size=3,
        env=3,
        description="Melody is a husky who loves people and other dogs. She respects all creatures alike, wouldn't harm even her own fleas.",
    )
    rover = Pet(
        owner=user5,
        name="Rover",
        petType="Dog",
        age=7,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/dog-316459_640.jpg",
        energy=5,
        social=2,
        behaved=5,
        size=2,
        env=2,
        description="Small on the outside, ferocious on the inside",
    )
    coco = Pet(
        owner=user6,
        name="Coco",
        petType="Dog",
        age=2,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/dog-4167361_640.jpg",
        energy=3,
        social=5,
        behaved=4,
        size=3,
        env=2,
        description="Coco is the fluffiest fluff ball you will ever meet",
    )
    midnight = Pet(
        owner=user7,
        name="Midnight",
        petType="Dog",
        age=1,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/dog-4427396_640.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=2,
        env=2,
        description="Midnight is the sweetest baby you'd ever meet. Loves kids and is constantly looking for a play mate",
    )
    mylo = Pet(
        owner=user8,
        name="Mylo",
        petType="Dog",
        age=5,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/dog-5964172_640.jpg",
        energy=5,
        social=5,
        behaved=3,
        size=3,
        env=3,
        description="Mylo is an american akita with tons of energy. He loves the cold and playing in the snow.",
    )
    mystic = Pet(
        owner=user9,
        name="Mystic",
        petType="Dog",
        age=8,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/havanese-5938608_640.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=1,
        env=1,
        description="Mystic is a real life teddy bear. Super cute and super cuddly",
    )
    doodle = Pet(
        owner=user10,
        name="Doodle",
        petType="Dog",
        age=7,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/labradoodle-2330320_640.jpg",
        energy=5,
        social=3,
        behaved=3,
        size=3,
        env=2,
        description="Doodle is super energetic and sometimes hard to keep up with. She needs someone on her level to run around with all day",
    )
    snow = Pet(
        owner=user11,
        name="Snow",
        petType="Dog",
        age=9,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/nature-1845066_640.jpg",
        energy=5,
        social=5,
        behaved=2,
        size=1,
        env=2,
        description="Snow is slightly mischevious and stubborn. She never fails to be the sweetest sweetheart playing the occasional trick on her mom.",
    )
    moshi = Pet(
        owner=user12,
        name="Moshi",
        petType="Dog",
        age=5,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/Screen+Shot+2021-02-27+at+9.47.18+PM.png",
        energy=5,
        social=5,
        behaved=5,
        size=2,
        env=2,
        description="Moshi is a japanse akita. Super poised with a lot of style. She enjoys being around other more sophisticated dogs.",
    )
    polo = Pet(
        owner=user13,
        name="Polo",
        petType="Dog",
        age=10,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/Screen+Shot+2021-02-27+at+9.36.24+PM.png",
        energy=2,
        social=5,
        behaved=5,
        size=3,
        env=2,
        description="Polo is a dalmation with a lot of spunk. He loves treats and is constantly looking for an adventure.",
    )
    sponge = Pet(
        owner=user14,
        name="Sponge",
        petType="Dog",
        age=9,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-fabrizio-avila-6682225.jpg",
        energy=5,
        social=3,
        behaved=3,
        size=2,
        env=3,
        description="Sponge is a bit of a drama queen. Constantly using his favorite trick 'playing dead' to get what he wants.",
    )
    rose = Pet(
        owner=user15,
        name="Rose",
        petType="Dog",
        age=3,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-julia-volk-5272934.jpg",
        energy=5,
        social=5,
        behaved=3,
        size=1,
        env=2,
        description="Rose loves a party. Can be territorial at times. Looking for a companion to get her more socialized.",
    )
    mario = Pet(
        owner=user16,
        name="Mario",
        petType="Dog",
        age=1,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/Screen+Shot+2021-02-27+at+10.14.44+PM.png",
        energy=5,
        social=3,
        behaved=3,
        size=1,
        env=2,
        description="Mario is a smooth criminal. He knows how to get out of tricky situations and he somehow always finds the treats his parents try to hide.",
    )
    mimi = Pet(
        owner=user17,
        name="Mimi",
        petType="Dog",
        age=10,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pug-801826_640.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=2,
        env=3,
        description="Drooling is my love language. I love cuddling, looking for another avid cuddler.",
    )
    choco = Pet(
        owner=user18,
        name="Choco",
        petType="Dog",
        age=0,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/puppy-1047722_640.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=1,
        env=2,
        description="Choco is a spoiled little boy. But look at his cute face how could anyone say no to that. Looking for a companion to get into trouble with.",
    )
    boots = Pet(
        owner=user19,
        name="Boots",
        petType="Dog",
        age=3,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/swimming-1502563_640.jpg",
        energy=5,
        social=3,
        behaved=2,
        size=1,
        env=3,
        description="Boots has really bad seperation anxiety. In need of a companion to help him get over his loneliness.",
    )
    star = Pet(
        owner=user19,
        name="Star",
        petType="Dog",
        age=7,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/animal-598305_640.jpg",
        energy=5,
        social=5,
        behaved=5,
        size=3,
        env=2,
        description="Her names speaks for itself. Star is the best doggone dog you'll ever meet. She invented poise.",
    )
    rodger = Pet(
        owner=user20,
        name="Rodger",
        petType="Dog",
        age=5,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/GermanShepherdFootball.png",
        energy=5,
        social=5,
        behaved=5,
        size=3,
        env=2,
        description="In the process of being recruited. Green Bay, here I come. Looking for someone to run some plays with.",
    )
    bruno.bst_frnds.append(cal)

    # ----------- Reptile here -----------
    spyro = Pet(
        owner=user1,
        name="Spyro",
        petType="Reptile",
        age=3,
        imageURL="https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/seed-bearded-dragon.jpg",
        energy=2,
        social=2,
        behaved=5,
        size=1,
        env=2,
        description="Spyro is a bearded dragon who loves to bask in the sun (or heat lamp) and eat crickets. He is kind to all dragons and people and has no problems being held.",
    )
    ekans = Pet(
        owner=koga,
        name="Ekans",
        petType="Reptile",
        age=4,
        imageURL="https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/seed-snake.jpg",
        energy=2,
        social=1,
        behaved=4,
        size=2,
        env=2,
        description="Ekans is a ball python who likes to be alone; however if you have a ball python who also likes to be alone, maybe they will enjoy being alone together!",
    )
    pascal = Pet(
        owner=rapunzel,
        name="Pascal",
        petType="Reptile",
        age=4,
        imageURL="https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/seed-chameleon.jpg",
        energy=4,
        social=5,
        behaved=4,
        size=1,
        env=3,
        description="Pascal is a chameleon who can be tricky to find, but is actually kind of cuddly when you do find him.",
    )
    kusko = Pet(
        owner=amanda,
        name="Kusko",
        petType="Reptile",
        age=4,
        imageURL="https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/seed-leopard-gecko.jpg",
        energy=3,
        social=4,
        behaved=5,
        size=1,
        env=3,
        description="Kusko likes being held and doing photo shoots. You'll never find a more loved or more loving leopard gecko ;)",
    )
    donatello = Pet(
        owner=splinter,
        name="Donatello",
        petType="Reptile",
        age=1,
        imageURL="https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/seed-turtle.jpg",
        energy=4,
        social=5,
        behaved=3,
        size=1,
        env=3,
        description="Donatello may be small, but his potential is huge. He enjoys having other people around, but just watch out for his low roundhouse kick.",
    )

    # ----------- Aquatic here -----------
    willy = Pet(
        owner=gus,
        name="Willy",
        petType="Aquatic",
        age=26,
        imageURL="https://pairyopet.s3-us-west-1.amazonaws.com/todd-cravens-QnBrjY-nFUs-unsplash.jpg",
        energy=5,
        social=4,
        behaved=5,
        size=5,
        env=3,
        description="Willy is a free-spirit. He loves having a whale of a time and enjoys making new friends.",
    )
    piper = Pet(
        owner=kelly,
        name="Piper",
        petType="Aquatic",
        age=8,
        imageURL="https://pairyopet.s3-us-west-1.amazonaws.com/adam-berkecz-K6kZKJOmZrk-unsplash.jpg",
        energy=5,
        social=5,
        behaved=3,
        size=4,
        env=3,
        description="Piper just loves to have fun. A little on the mischevous side but always sweet deep down. Loves to surf!",
    )
    banzai = Pet(
        owner=ellie,
        name="Banzai",
        petType="Aquatic",
        age=2,
        imageURL="https://pairyopet.s3-us-west-1.amazonaws.com/david-clode-fG1fdervp1E-unsplash.jpg",
        energy=3,
        social=3,
        behaved=4,
        size=1,
        env=2,
        description="Banzai is a cute seahorse. He's comfortable in the tank and also in the big blue ocean. Favorite treat is small crustaceans.",
    )
    jam = Pet(
        owner=gabe,
        name="Jam",
        petType="Aquatic",
        age=6,
        imageURL="https://pairyopet.s3-us-west-1.amazonaws.com/arushee-agrawal-KGmgAZ01AVw-unsplash.jpg",
        energy=1,
        social=2,
        behaved=2,
        size=3,
        env=3,
        description="Jam is a fiesty jellyfish. He can be tons of fun, but be careful to make sure you don't bump into his tentacles!",
    )
    marvin = Pet(
        owner=peter,
        name="Marvin",
        petType="Aquatic",
        age=9,
        imageURL="https://pairyopet.s3-us-west-1.amazonaws.com/rachel-hisko-rEM3cK8F1pk-unsplash.jpg",
        energy=3,
        social=4,
        behaved=5,
        size=2,
        env=2,
        description="Marvin enjoys quiet, relaxing company. Big fan of other fish that are blue. Doesn't like boats.",
    )
    # ----------- Farm here -----------
    cluck_norris = Pet(
        owner=mark,
        name="Cluck Norris",
        petType="Farm",
        age=5,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/rooster.png",
        energy=4,
        social=3,
        behaved=2,
        size=1,
        env=1,
        description="Cluck Norris is the best alarm clock around and he means business.  He is pretty clucky once you get to know him.",
    )
    lil_sebastian = Pet(
        owner=andy,
        name="Lil' Sebastian",
        petType="Farm",
        age=10,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/pony.png",
        energy=4,
        social=5,
        behaved=5,
        size=3,
        env=1,
        description="Lil' Sebastian wins the heart of everyone he meets. As long as you have hay, he will prance during your playdate.",
    )
    donkey = Pet(
        owner=shrek,
        name="Donkey",
        petType="Farm",
        age=15,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/donkey.png",
        energy=5,
        social=5,
        behaved=3,
        size=3,
        env=2,
        description="Donkey is the most talkative thing you ever did see. He is very well-behaved, but will always break out into song.",
    )
    wilbur = Pet(
        owner=charlotte,
        name="Wilbur",
        petType="Farm",
        age=1,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/pig.png",
        energy=5,
        social=5,
        behaved=3,
        size=1,
        env=2,
        description="Wilbur is one terrific pig. Everything that meets him, loves him.",
    )
    mr_nibbles = Pet(
        owner=ned,
        name="Mr. Nibbles",
        petType="Farm",
        age=2,
        imageURL="https://flask-pairyopet.s3.us-east-2.amazonaws.com/llama.png",
        energy=4,
        social=3,
        behaved=2,
        size=3,
        env=1,
        description="Mr. Nibbles loves any clothing he can grab, his favorite are hats.  He loves playdates, just remember to keep track of your belongings.",
    )

    # ----------- Birds -----------
    rainforest = Pet(
        owner=shelly,
        name="Rainforest",
        petType="Bird",
        age=5,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-andr%C3%A9-lisatchok-2226006.jpg",
        energy=5,
        social=4,
        behaved=5,
        size=1,
        env=3,
        description="If your pet is looking for a talker he'll find the best companion in Rainforest.",
    )
    moonlight = Pet(
        owner=rob,
        name="Moonlight",
        petType="Bird",
        age=2,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-fabio-scaletta-2115984.jpg",
        energy=4,
        social=3,
        behaved=2,
        size=1,
        env=1,
        description="My son Moonlight is looking for a fellow night walker who enjoys singing to the moon.",
    )
    wolly = Pet(
        owner=star,
        name="Wolly",
        petType="Bird",
        age=1,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-flickr-151511.jpg",
        energy=5,
        social=5,
        behaved=3,
        size=3,
        env=2,
        description="Wolly is looking for a fellow hunter. No rat companions please.",
    )
    snow_white = Pet(
        owner=dwarf,
        name="Snow White",
        petType="Bird",
        age=10,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-mali-maeder-75973.jpg",
        energy=4,
        social=5,
        behaved=5,
        size=2,
        env=1,
        description="Snow white is a sassy friendly energetic baby. Looking for a companion to talk fairytales with.",
    )
    lucky = Pet(
        owner=biggie,
        name="Lucky",
        petType="Bird",
        age=2,
        imageURL="https://pair-yo-pet.s3.amazonaws.com/pexels-carlos-spitzer-17811.jpg",
        energy=3,
        social=3,
        behaved=4,
        size=3,
        env=2,
        description="Lucky enjoys hiking and seeing the sites. Any fellow adventurers out there?",
    )

    # ----------- add to db in a random order here -----------

    db.session.add(bruno)
    db.session.add(cal)
    db.session.add(mylo)
    db.session.add(melody)
    db.session.add(rover)
    db.session.add(coco)
    db.session.add(midnight)
    db.session.add(mylo)
    db.session.add(mystic)
    db.session.add(doodle)
    db.session.add(snow)
    db.session.add(moshi)
    db.session.add(polo)
    db.session.add(sponge)
    db.session.add(rose)
    db.session.add(mario)
    db.session.add(mimi)
    db.session.add(choco)
    db.session.add(boots)
    db.session.add(star)
    db.session.add(rodger)

    db.session.add(spyro)
    db.session.add(ekans)
    db.session.add(pascal)
    db.session.add(kusko)
    db.session.add(donatello)

    db.session.add(cluck_norris)
    db.session.add(lil_sebastian)
    db.session.add(donkey)
    db.session.add(wilbur)
    db.session.add(mr_nibbles)

    db.session.add(willy)
    db.session.add(marvin)
    db.session.add(jam)
    db.session.add(piper)
    db.session.add(banzai)

    db.session.add(rainforest)
    db.session.add(moonlight)
    db.session.add(wolly)
    db.session.add(snow_white)
    db.session.add(lucky)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_pets():
    db.session.execute("TRUNCATE pets CASCADE;")
    db.session.commit()

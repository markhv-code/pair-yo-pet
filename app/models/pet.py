from .db import db

best_friends = db.Table(
    "best_friends",
    db.Column("frmBFPetId", db.Integer, db.ForeignKey("pets.id"), primary_key=True),
    db.Column("toBFPetId", db.Integer, db.ForeignKey("pets.id"), primary_key=True),
)


class Pet(db.Model):
    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    petType = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    imageURL = db.Column(db.String(2083), nullable=False)
    energy = db.Column(db.Integer, nullable=False)
    social = db.Column(db.Integer, nullable=False)
    behaved = db.Column(db.Integer, nullable=False)
    size = db.Column(db.Integer, nullable=False)
    env = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(500), nullable=False)

    owner = db.relationship("User", back_populates="pets")
    bst_frnds = db.relationship(
        "Pet",
        secondary=best_friends,
        primaryjoin=(best_friends.c.frmBFPetId == id),
        secondaryjoin=(best_friends.c.toBFPetId == id),
        backref=db.backref("best_friends", lazy="dynamic"),
        lazy="dynamic",
    )

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "petType": self.petType,
            "age": self.age,
            "imageURL": self.imageURL,
            "energy": self.energy,
            "social": self.social,
            "behaved": self.behaved,
            "size": self.size,
            "env": self.env,
            "description": self.description,
            "owner": self.owner.to_dict()
        }

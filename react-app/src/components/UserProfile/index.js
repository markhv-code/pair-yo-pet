import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './users.css'


function User() {
  const { userId }  = useParams();

  const user = useSelector((state) => state.users[userId]);
  const pets = useSelector((state) => Object.values(state.pets));

  const mypets = pets.filter(pet => pet.userId === user.id)
  console.log(mypets)

  const { city, email, stateAbbr, username } = user
  return (
    <>
      <div className="profile-container">
        <div className="user-info">
          <div className="username">
            <i className="fas fa-user-circle fa-lg" />
            <h1>{username}</h1>
          </div>
          <div>
            <div className="email">
              <i className="fa fa-envelope" />
              <h3>{email}</h3>
            </div>
            <div className="location">
              <i className="fa fa-map-marker" />
              <h3>
                {city},{stateAbbr}
              </h3>
            </div>
          </div>
        </div>
        <div className="pets">
          <h2>My Pets</h2>
        <div className="side__container">
          {mypets.map((babies) => {
            const { imageURL, name, age } = babies;
            return (
              <div className="right__container">
                <img src={imageURL} alt="" />
                <div>
                  <h3>{name}</h3>
                  <h3>{age}</h3>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

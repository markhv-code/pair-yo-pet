import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './users.css'


function User() {
  const { userId }  = useParams();

  const user = useSelector((state) => state.users[userId]);
  const pets = useSelector((state) => Object.values(state.pets));

  const mypets = pets.filter(pet => pet.userId === user.id)
  console.log(mypets)

  // if (sessionUser.id !== user.id) return null;
  const { city, email, stateAbbr, username } = user
  return (
    <>
      <div className="profile-container">
        <div className="user-info">
          <div className="username">
            <i className="fas fa-user-circle fa-lg" />
            <h1>{username}</h1>
          </div>
          <div className="userInfo">
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
        <div>
          <h2>My Pets</h2>
          {mypets.map((babies) => {
            const { imageUrl, name, age } = babies;
            return (
              <div>
                <img src={imageUrl} alt=""/>
                <div>
                  <h3>{name}</h3>
                  <h3>{age}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default User;

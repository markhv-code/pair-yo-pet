import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './users.css'


function User() {
  const { userId }  = useParams();

  const user = useSelector((state) => state.users[userId]);
  const pets = useSelector((state) => Object.values(state.pets));

  petsArr = [pets]

  // if (sessionUser.id !== user.id) return null;
  const { city, email, stateAbbr, username } = user
  return (
    <>
      <div className="profile-container">
        <div>
          <h1>Welcome {username}</h1>
        </div>
        <div>
          <h2>My Info</h2>
          <ul>
            <li>{email}</li>
            <li>{city},{stateAbbr}</li>
          </ul>
        </div>
        <div>
          <h2>My Pets</h2>
        </div>
      </div>
    </>
  );
}

export default User;

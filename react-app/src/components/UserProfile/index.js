import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './users.css'


function User() {
  const history = useHistory();
  const { userId }  = useParams();

  const user = useSelector((state) => state.users[userId]);
  const pets = useSelector((state) => Object.values(state.pets));

  const mypets = pets.filter(pet => pet.userId === user.id)

  if(!user) return null;
  const { city, email, stateAbbr, username } = user
  return (
    <>
      <div className="user-profile-container">
        <div className="user-info">
          <div className="username">
            <h1>{`${username}'s Pets`}</h1>
          </div>
          <div>
            <div className="email">
              <i className="fa fa-envelope">{` ${email}`}</i>
            </div>
            <div className="location">
              <i className="fa fa-map-marker">{` ${city}, ${stateAbbr}`}</i>
            </div>
            <div className="user-story">
              <h2>User Story:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            <div className="user-buttons">
              <i className="fa fa-bell" />
              <i className="fa fa-camera"/>
              <i className="fa fa-paw"/>
              <i className="fa fa-gear"/>
            </div>
            </div>
          </div>
        </div>
        <div className="pets">
          <div className="side__container">
            {mypets.map((babies) => {
              const { imageURL, name, age, id } = babies;
              return (
                <div
                  key={id}
                  className='pet__card user-profile__pet-card'
                  onClick={() => {
                    history.push(`/pets/${id}`);
                  }}
                >
                  <img src={imageURL} alt='' />
                  <div className='pet__card-info'>
                    <h3>{name}</h3>
                    <h3>Age: {age}</h3>
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

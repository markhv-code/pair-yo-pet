import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import { logout } from '../../services/auth';
import { removeUser } from '../../store/session';


export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logoutUser = async (e) => {
    e.preventDefault();
    await logout();
    dispatch(removeUser());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle fa-lg" />
      </button>
      {showMenu && (
        <ul className="navbar__dropdown">
          {/* <li>
            <button className="navbar__dropdown__button" onClick={userProfile}>
              Profile
            </button>
          </li> */}
          <li className='navbar__dropdown__button'>
            <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>
              Profile
            </NavLink>
          </li>
          <li>
            <button className="navbar__dropdown__button" onClick={logoutUser}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

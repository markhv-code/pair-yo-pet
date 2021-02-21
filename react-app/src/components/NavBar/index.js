import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

// import components
import SignUpFormModal from '../auth/SignUpFormModal';
import LoginFormModal from '../auth/LoginFormModal';

// import context
import { useModalAndAuthContext } from '../../context/ModalAndAuth';

const NavBar = () => {
  const { authenticated } = useModalAndAuthContext();

  return (
    <nav>
      <ul>
        {!authenticated && (
          <>
            <li>
              <SignUpFormModal />
            </li>
            <li>
              <LoginFormModal />
            </li>
          </>
        )}

        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li> */}
        {authenticated && (
          <>
            <li>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

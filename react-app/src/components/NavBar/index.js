import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import SignUpFormModal from '../auth/SignUpFormModal';
import LoginFormModal from '../auth/LoginFormModal';
import PetProfileForm from '../PetProfileForm';
import ProfileButton from './ProfileButton';
import LoggedInDropdown from './LoggedInDropdown';
import SessionLinksDropdown from './SessionLinksDropdown';

// import css
import './navBar.css';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  let sessionLinks;

  if (!!sessionUser) {
    if (width > 800) {
      sessionLinks = (
        <>
          {/* <li className='nav__item'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
          <li className='nav__item'>
            <NavLink to='/browse' exact={true} activeClassName='active'>
              Browse Pets
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/messages' exact={true} activeClassName='active'>
              Messages
            </NavLink>
          </li>
          <li className='nav__item'>
            <PetProfileForm user={sessionUser} />
          </li>
          <li className='nav__item'>
            <ProfileButton user={sessionUser} />
          </li>
        </>
      );
    } else {
      sessionLinks = <LoggedInDropdown />;
    }
  } else {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <NavLink
              className='nav__item'
              to='/browse'
              exact={true}
              activeClassName='active'
            >
              Browse Pets
            </NavLink>
          </li>
          <li className='nav__item'>
            <LoginFormModal />
          </li>
          <li className='nav__item'>
            <SignUpFormModal />
          </li>
        </>
      );
    } else {
      sessionLinks = <SessionLinksDropdown />;
    }
  }

  return (
    <header className='site-header'>
      <div className='site-header__wrapper'>
        <a className='logo-anchor' href='/'>
          <img
            className='logo bounce-7'
            alt="Pair Yo' Pet"
            src='https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/pre-saved-images/pyp-logo-cropped.png'
          ></img>
        </a>
        <nav className='nav'>
          <ul className='nav__wrapper'>{sessionLinks}</ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

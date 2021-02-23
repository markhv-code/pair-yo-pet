import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import custom hook
import { useWindowWidth } from '../../services/windowWidth';

// import components
import SignUpFormModal from '../auth/SignUpFormModal';
import LoginFormModal from '../auth/LoginFormModal';
import ProfileButton from './ProfileButton';
import LogoutButton from '../auth/LogoutButton';

// import css
import './navBar.css';

const NavBar = () => {
  // const { authenticated } = useModalAndAuthContext();
  const sessionUser = useSelector((state) => state.session.user);
  const width = useWindowWidth();

  let sessionLinks;

  if (sessionUser) {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          {/* <li className='nav__item'>
            <MyFavoritesModal />
          </li> */}
          <li className='nav__item'>
            <ProfileButton user={sessionUser} />
          </li>
        </>
      );
      // } else {
      //   sessionLinks = <LoggedInDropdown />;
    }
  } else {
    if (width > 800) {
      sessionLinks = (
        <>
          <li className='nav__item'>
            <LoginFormModal />
          </li>
          <li className='nav__item'>
            <SignUpFormModal />
          </li>
          <li className='nav__item'>
            <LogoutButton />
          </li>
        </>
      );
      // } else {
      //   sessionLinks = <SessionLinksDropdown />;
    }
  }

  return (
    <header
      className='site-header'
      // style={{
      //   position: window.location.pathname === '/' ? 'fixed' : 'sticky',
      // }}
    >
      <div className='site-header__wrapper'>
        <a className='site-header__title' href='/'>
          <img
            className='logo'
            alt="pair yo' pet logo"
            src='/images/pyp-logo-cropped.png'
          ></img>{' '}
        </a>
        <nav className='nav'>
          {/* <ul className='nav__wrapper'>{isLoaded && sessionLinks}</ul> */}
          <ul className='nav__wrapper'>{sessionLinks}</ul>
        </nav>
      </div>
    </header>
  );

  // return (
  //   <header className='site-header'>
  //     <nav className='navbar'>
  //       <div>
  //         <img
  //           className='logo'
  //           alt="pair yo' pet logo"
  //           src='/images/pyp-logo-cropped.png'
  //         ></img>
  //       </div>
  //       <ul className='navbar__links'>
  //         <li className='navbar__link'>
  //           <NavLink to='/' exact={true} activeClassName='active'>
  //             Home
  //           </NavLink>
  //         </li>
  //         {authenticated && (
  //           <>
  //             <li className='navbar__link'>
  //               <NavLink to='/users' exact={true} activeClassName='active'>
  //                 Users
  //               </NavLink>
  //             </li>
  // <li className='navbar__link'>
  //   <LogoutButton />
  // </li>
  //           </>
  //         )}
  //         {!authenticated && (
  //           <>
  //             <li className='navbar__link'>
  //               <SignUpFormModal />
  //             </li>
  //             <li className='navbar__link'>
  //               <LoginFormModal />
  //             </li>
  //           </>
  //         )}
  //       </ul>
  //     </nav>
  //   </header>
  // );
};

export default NavBar;

import React from 'react';
import { logout } from '../../services/auth';

// import context
import { useModalAndAuthContext } from '../../context/ModalAndAuth';

const LogoutButton = () => {
  const { setAuthenticated } = useModalAndAuthContext();
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;

import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

// components
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';

// import other
import { useModalAndAuthContext } from './context/ModalAndAuth';
import { setUser } from './store/session';
import { authenticate } from './services/auth';

function App() {
  const { authenticated, setAuthenticated } = useModalAndAuthContext();

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(setUser(user));
      }
      setLoaded(true);
    })();
  }, [setAuthenticated, dispatch]);

  if (!loaded) {
    return 'loading/';
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <ProtectedRoute
          path='/users'
          exact={true}
          authenticated={!!sessionUser}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path='/users/:userId'
          exact={true}
          authenticated={!!sessionUser}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} authenticated={!!sessionUser}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

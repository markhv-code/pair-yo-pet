// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../../services/auth';
import { useModalAndAuthContext } from '../../../context/Modal';

function LoginForm() {
  const { authenticated, setAuthenticated } = useModalAndAuthContext();

  // const dispatch = useDispatch();
  // const [credential, setCredential] = useState('');
  // const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState([]);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(sessionActions.login({ credential, password })).catch(
  //     (res) => {
  //       if (res.data && res.data.errors) setErrors(res.data.errors);
  //     }
  //   );
  // };

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit'>Login</button>
      </div>
    </form>
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>
    //       Username or Email
    //       <input
    //         type='text'
    //         value={credential}
    //         onChange={(e) => setCredential(e.target.value)}
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Password
    //       <input
    //         type='password'
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </label>
    //   </div>

    //   <div>
    //     <button type='submit'>Log In</button>
    //   </div>

    //   {!!errors.length && (
    //     <div>
    //       <ul>
    //         {errors.map((error, idx) => (
    //           <li key={idx}>{error}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </form>
  );
}

export default LoginForm;

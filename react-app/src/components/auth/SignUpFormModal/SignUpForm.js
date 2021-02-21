// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../services/auth';
import { useModalAndAuthContext } from '../../../context/ModalAndAuth';

function SignUpFormPage() {
  const { authenticated, setAuthenticated } = useModalAndAuthContext();
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  debugger;

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // setErrors([]);
  // return dispatch(sessionActions.signUp({ email, username, password })).catch(
  //   (res) => {
  //     if (res.data && res.data.errors) {
  //       if (password !== confirmPassword) {
  //         setErrors([...res.data.errors, 'Password fields must match']);
  //       } else {
  //         setErrors(res.data.errors);
  //       }
  //     }
  //   }
  // );
  // };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label>
  //         Email
  //         <input
  //           type='text'
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //       </label>
  //     </div>

  //     <div>
  //       <label>
  //         Username
  //         <input
  //           type='text'
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //           required
  //         />
  //       </label>
  //     </div>

  //     <div>
  //       <label>
  //         Password
  //         <input
  //           type='password'
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //       </label>
  //     </div>

  //     <div>
  //       <label>
  //         Confirm Password
  //         <input
  //           type='password'
  //           value={confirmPassword}
  //           onChange={(e) => setConfirmPassword(e.target.value)}
  //           required
  //         />
  //       </label>
  //     </div>

  //     <div>
  //       <button type='submit'>Sign Up</button>
  //     </div>

  //     {!!errors.length && (
  //       <div>
  //         <ul>
  //           {errors.map((error, idx) => (
  //             <li key={idx}>{error}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     )}
  //   </form>
  // );
}

export default SignUpFormPage;

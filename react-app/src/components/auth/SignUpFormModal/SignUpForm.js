import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../services/auth';
import { login } from '../../../services/auth';
import { setUser } from '../../../store/session';

function SignUpFormPage() {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [stateAbbr, setStateAbbr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();

  const states = [
    "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN",
    "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH",
    "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA",
    "VT", "WA", "WI", "WV", "WY"
  ];

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === repeatPassword) {
      const user = await signUp(
        username,
        email,
        city,
        stateAbbr,
        password,
        repeatPassword
      );
      if (!user.errors) {
        dispatch(setUser(user));
      } else {
        setErrors(user.errors);
      }
    } else {
      setErrors((prevErrors) => [...prevErrors, 'Password fields must match']);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const user = await login('demo@aa.io', 'password');
    dispatch(setUser(user));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateStateAbbr = (e) => {
    setStateAbbr(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
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
          <label>City</label>
          <input
            type='text'
            name='city'
            onChange={updateCity}
            value={city}
          ></input>
        </div>
        <div>
          <label>State Abbreviation</label>
          <select onChange={updateStateAbbr} value={stateAbbr} size={1}>
            {states.map(state => {
              return (
                <option value={state} key={state}>{state}</option>
              )
            })}
          </select>
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
      <form onSubmit={demoLogin}>
        <button type='submit'>Demo Login</button>
      </form>
    </>
  );
}

export default SignUpFormPage;

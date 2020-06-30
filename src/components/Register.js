import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerStart } from '../store/auth/authActions';

const Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerStart(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>REGISTER</h2>
      <label>
        Email
        <input
          name="email"
          type="text"
          value={credentials.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default Register;

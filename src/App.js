import './App.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LogIn from './components/LogIn';
import Register from './components/Register';
import { logOut } from './store/auth/authActions';

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {auth.currentUser ? (
        <>
          <div>Connected user with token {auth.currentUser.token}</div>
          <button onClick={() => dispatch(logOut())}>Log out</button>
        </>
      ) : (
        <>
          <LogIn />
          <Register />
          {auth.error ? <span>{auth.error?.response.data}</span> : null}
        </>
      )}
    </div>
  );
}

export default App;

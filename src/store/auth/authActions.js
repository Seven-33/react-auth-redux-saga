import types from './authActionTypes';

export const logInStart = (credentials) => ({
  type: types.LOG_IN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.LOG_IN_FAILURE,
  payload: error,
});

export const registerStart = (credentials) => ({
  type: types.REGISTER_START,
  payload: credentials,
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

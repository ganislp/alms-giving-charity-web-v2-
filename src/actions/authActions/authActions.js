import * as authActionTypes from '../actionTypes/authActionTypes';

export const loginRequest = () => {
  return {
    type: authActionTypes.LOGIN_REQUEST,
    payload: { onSubmiting: true }
  }
}


export const loginSuccess = (results) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: { onSubmiting: false,  results, }
  }
}

export const loginError = (results) => {
  return {
    type: authActionTypes.LOGIN_ERROR,
    payload: { onSubmiting: false,  results, }
  }
}

export const registerSuccess = (results) => {
  return {
    type: authActionTypes.REGISTER_SUCCESS,
    currentUser: results
  }
}

export const registerError = (results) => {
  return {
    type: authActionTypes.REGISTER_ERROR,
    currentUser: results
  }
}

export const fetchUser = (results) => {
  return {
    type: authActionTypes.FETCH_USER,
    payload: {   results, }
  }
}

export const fetchUserError = (results) => {
  return {
    type: authActionTypes.FETCH_USER,
    payload: { results, }
  }
}

export const logOut = (results) => {
  return {
    type: authActionTypes.LOGOUT,
    payload: {   results, }
  }
}
import * as authActionTypes from '../actionTypes/authActionTypes';


export const loginSuccess = (results) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    currentUser: results,
  }
}

export const loginError = (results) => {
  return {
    type: authActionTypes.LOGIN_ERROR,
    currentUser: results,
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
    currentUser: results
  }
}

export const fetchUserError = (results) => {
  return {
    type: authActionTypes.FETCH_USER,
    currentUser: results
  }
}

export const logOut = (results) => {
  return {
    type: authActionTypes.LOGOUT,
     currentUser: results
  }
}
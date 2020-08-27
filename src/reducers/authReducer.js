import * as authActionTypes from '../actions/actionTypes/authActionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case authActionTypes.REGISTER_SUCCESS:
    case authActionTypes.LOGIN_SUCCESS:
    case authActionTypes.LOGOUT:
    case authActionTypes.FETCH_USER:
      return action.currentUser;
    default:
      return state;
  }
}
import * as authActionTypes from '../actions/actionTypes/authActionTypes';


export default (state = {onSubmiting:false}, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return { ...state, ...action.payload };
    case authActionTypes.LOGIN_SUCCESS:
      return { ...state, ...action.payload };
    case authActionTypes.LOGIN_ERROR:
      return { ...state, ...action.payload };
    case authActionTypes.LOGOUT:
      return { ...state, ...action.payload };
    case authActionTypes.REGISTER_SUCCESS:
      return { ...state, ...action.payload };
    case authActionTypes.FETCH_USER:
      return { ...state,...action.payload };

    default:
      return state;
  }
}
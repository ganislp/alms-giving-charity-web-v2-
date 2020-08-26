import * as heroActionTypes from '../../actions/actionTypes/heroActionTypes'
import _ from 'lodash';


export default (state = { heroDetails: {} }, action) => {
  switch (action.type) {
    case heroActionTypes.GET_HERO_REQUEST:
      return { ...state, ...action.payload }
    case heroActionTypes.GET_HERO_SUCCESS:
      return { ...state, heroDetails: { ..._.mapKeys(action.payload.heroDetails, 'uid') }, loading: action.payload.loading }
    case heroActionTypes.GET_HERO_ERROR:
      return { ...state, ...action.payload };
   
      case heroActionTypes.CREATE_HERO_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.CREATE_HERO_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.CREATE_HERO_ERROR:
      return { ...state, ...action.payload }
   
      case heroActionTypes.EDIT_HERO_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.EDIT_HERO_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.EDIT_HERO_ERROR:
      return { ...state, ...action.payload }
   
      case heroActionTypes.ACTIVE_HERO_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.ACTIVE_HERO_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.ACTIVE_HERO_ERROR:
      return { ...state, ...action.payload }
   
      case heroActionTypes.INACTIVE_HERO_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.INACTIVE_HERO_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.INACTIVE_HERO_ERROR:
      return { ...state, ...action.payload }


      case heroActionTypes.DELETE_HERO_REQUEST:
        return { ...state, ...action.payload };
      case heroActionTypes.DELETE_HERO_SUCCESS:
        return { ...state, ...action.payload };
      case heroActionTypes.DELETE_HERO_ERROR:
        return { ...state, ...action.payload }
    default:
      return state;
  }
}
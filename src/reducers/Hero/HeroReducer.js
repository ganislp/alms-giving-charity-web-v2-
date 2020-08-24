import * as heroActionTypes from '../../actions/actionTypes/heroActionTypes'
import _ from 'lodash';


export default   (state = {}, action) => {
  switch (action.type) {
    case  heroActionTypes.CREATE_HERO_REQUEST:
        return { ...state,...action.payload };
    case heroActionTypes.CREATE_HERO_SUCCESS:
      return { ...state, ...action.payload };
      case  heroActionTypes.DELETE_HERO_ERROR:
        return { ...state, ...action.payload  }     
    default:
      return state;
  }
}
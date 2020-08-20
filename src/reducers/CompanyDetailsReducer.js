import * as companyActionTypes from '../actions/actionTypes/companyActionTypes'
import _ from 'lodash';


export default   (state = {}, action) => {
  switch (action.type) {
    case  companyActionTypes.CREATE_COMPANY_DETAILS_REQUEST:
        return { ...state,...action.payload };
    case companyActionTypes.CREATE_COMPANY_DETAILS_SUCCESS:
      return { ...state, ...action.payload };
      case  companyActionTypes.CREATE_COMPANY_DETAILS_ERROR:
        return { ...state, ...action.payload  };
      case  companyActionTypes.GET_COMPANY_DETAILS_REQUEST:
        return { ...state,...action.payload };
        case  companyActionTypes.GET_COMPANY_DETAILS_SUCCESS:
        return { ...state, ..._.mapKeys(action.payload.companyDetails, 'uid'),loading:action.payload.loading  };
        case  companyActionTypes.GET_COMPANY_DETAILS_ERROR:
        return { ...state, ...action.payload  };
    default:
      return state;
  }
}
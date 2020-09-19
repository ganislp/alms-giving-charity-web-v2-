import * as ourCausesActionTypes from '../../actions/actionTypes/ourCausesActionTypes';

import _ from 'lodash';

const initialUserState = {
  ourCausesDetails: {},
  ourCausesImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case ourCausesActionTypes.GET_OUR_CAUSES_REQUEST:
      return { ...state, ...action.payload }
    case ourCausesActionTypes.GET_OUR_CAUSES_SUCCESS:
      return { ...state, ourCausesDetails: { ..._.mapKeys(action.payload.ourCausesDetails, 'uid') } }
    case ourCausesActionTypes.GET_OUR_CAUSES_ERROR:
      return { ...state, ...action.payload };

    case ourCausesActionTypes.CREATE_OUR_CAUSES_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.CREATE_OUR_CAUSES_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.CREATE_OUR_CAUSES_ERROR:
      return { ...state, ...action.payload }

    case ourCausesActionTypes.EDIT_OUR_CAUSES_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.EDIT_OUR_CAUSES_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.EDIT_OUR_CAUSES_ERROR:
      return { ...state, ...action.payload }

    case ourCausesActionTypes.ACTIVE_OUR_CAUSES_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.ACTIVE_OUR_CAUSES_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.ACTIVE_OUR_CAUSES_ERROR:
      return { ...state, ...action.payload }

    case ourCausesActionTypes.INACTIVE_OUR_CAUSES_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.INACTIVE_OUR_CAUSES_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.INACTIVE_OUR_CAUSES_ERROR:
      return { ...state, ...action.payload }


    case ourCausesActionTypes.DELETE_OUR_CAUSES_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.DELETE_OUR_CAUSES_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.DELETE_OUR_CAUSES_ERROR:
      return { ...state, ...action.payload }


    case ourCausesActionTypes.UPLOAD_OUR_CAUSES_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.UPLOAD_OUR_CAUSES_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.UPLOAD_OUR_CAUSES_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case ourCausesActionTypes.FETCH_OUR_CAUSES_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case ourCausesActionTypes.FETCH_OUR_CAUSES_IMAGES_SUCCESS:
      return { ...state, ourCausesImages: { ..._.mapKeys(action.payload.ourCausesImages, 'uid') } }
    case ourCausesActionTypes.FETCH_OUR_CAUSES_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case ourCausesActionTypes.DELETE_OUR_CAUSES_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.DELETE_OUR_CAUSES_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.DELETE_OUR_CAUSES_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case ourCausesActionTypes.ACTIVE_OUR_CAUSES_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.ACTIVE_OUR_CAUSES_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.ACTIVE_OUR_CAUSES_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case ourCausesActionTypes.INACTIVE_OUR_CAUSES_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.INACTIVE_OUR_CAUSES_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case ourCausesActionTypes.INACTIVE_OUR_CAUSES_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
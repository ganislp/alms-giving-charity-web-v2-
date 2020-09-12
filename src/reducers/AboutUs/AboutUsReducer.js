import * as AboutUsActionTypes from '../../actions/actionTypes/aboutUsActionTypes';

import _ from 'lodash';

const initialUserState = {
  aboutUsDetails: {},
  aboutUsImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case AboutUsActionTypes.GET_ABOUT_US_REQUEST:
      return { ...state, ...action.payload }
    case AboutUsActionTypes.GET_ABOUT_US_SUCCESS:
      return { ...state, aboutUsDetails: { ..._.mapKeys(action.payload.aboutUsDetails, 'uid') } }
    case AboutUsActionTypes.GET_ABOUT_US_ERROR:
      return { ...state, ...action.payload };

    case AboutUsActionTypes.CREATE_ABOUT_US_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.CREATE_ABOUT_US_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.CREATE_ABOUT_US_ERROR:
      return { ...state, ...action.payload }

    case AboutUsActionTypes.EDIT_ABOUT_US_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.EDIT_ABOUT_US_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.EDIT_ABOUT_US_ERROR:
      return { ...state, ...action.payload }

    case AboutUsActionTypes.ACTIVE_ABOUT_US_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.ACTIVE_ABOUT_US_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.ACTIVE_ABOUT_US_ERROR:
      return { ...state, ...action.payload }

    case AboutUsActionTypes.INACTIVE_ABOUT_US_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.INACTIVE_ABOUT_US_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.INACTIVE_ABOUT_US_ERROR:
      return { ...state, ...action.payload }


    case AboutUsActionTypes.DELETE_ABOUT_US_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.DELETE_ABOUT_US_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.DELETE_ABOUT_US_ERROR:
      return { ...state, ...action.payload }


    case AboutUsActionTypes.UPLOAD_ABOUT_US_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.UPLOAD_ABOUT_US_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.UPLOAD_ABOUT_US_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case AboutUsActionTypes.FETCH_ABOUT_US_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case AboutUsActionTypes.FETCH_ABOUT_US_IMAGES_SUCCESS:
      return { ...state, aboutUsImages: { ..._.mapKeys(action.payload.aboutUsImages, 'uid') } }
    case AboutUsActionTypes.FETCH_ABOUT_US_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case AboutUsActionTypes.DELETE_ABOUT_US_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.DELETE_ABOUT_US_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.DELETE_ABOUT_US_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case AboutUsActionTypes.ACTIVE_ABOUT_US_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.ACTIVE_ABOUT_US_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.ACTIVE_ABOUT_US_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case AboutUsActionTypes.INACTIVE_ABOUT_US_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.INACTIVE_ABOUT_US_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case AboutUsActionTypes.INACTIVE_ABOUT_US_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
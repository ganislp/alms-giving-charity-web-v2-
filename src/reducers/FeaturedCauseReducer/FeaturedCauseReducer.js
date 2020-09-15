import * as featuredCauseActionTypes from '../../actions/actionTypes/featuredCauseActionTypes';

import _ from 'lodash';

const initialUserState = {
  featuredCauseDetails: {},
  featuredCauseImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case featuredCauseActionTypes.GET_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload }
    case featuredCauseActionTypes.GET_FEATURED_CAUSE_SUCCESS:
      return { ...state, featuredCauseDetails: { ..._.mapKeys(action.payload.featuredCauseDetails, 'uid') } }
    case featuredCauseActionTypes.GET_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload };

    case featuredCauseActionTypes.CREATE_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.CREATE_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.CREATE_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }

    case featuredCauseActionTypes.EDIT_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.EDIT_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.EDIT_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }

    case featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }

    case featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }


    case featuredCauseActionTypes.DELETE_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.DELETE_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.DELETE_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }


    case featuredCauseActionTypes.UPLOAD_FEATURED_CAUSE_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.UPLOAD_FEATURED_CAUSE_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.UPLOAD_FEATURED_CAUSE_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case featuredCauseActionTypes.FETCH_FEATURED_CAUSE_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case featuredCauseActionTypes.FETCH_FEATURED_CAUSE_IMAGES_SUCCESS:
      return { ...state, featuredCauseImages: { ..._.mapKeys(action.payload.featuredCauseImages, 'uid') } }
    case featuredCauseActionTypes.FETCH_FEATURED_CAUSE_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case featuredCauseActionTypes.DELETE_FEATURED_CAUSE_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.DELETE_FEATURED_CAUSE_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.DELETE_FEATURED_CAUSE_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
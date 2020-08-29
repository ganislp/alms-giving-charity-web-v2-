import * as heroActionTypes from '../../actions/actionTypes/heroActionTypes';

import _ from 'lodash';

const initialUserState = {
  heroDetails: {},
  heroImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case heroActionTypes.GET_HERO_REQUEST:
      return { ...state, ...action.payload }
    case heroActionTypes.GET_HERO_SUCCESS:
      return { ...state, heroDetails: { ..._.mapKeys(action.payload.heroDetails, 'uid') } }
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


    case heroActionTypes.UPLOAD_HERO_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.UPLOAD_HERO_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.UPLOAD_HERO_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case heroActionTypes.FETCH_HERO_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case heroActionTypes.FETCH_HERO_IMAGES_SUCCESS:
      return { ...state, heroImages: { ..._.mapKeys(action.payload.heroImages, 'uid') } }
    case heroActionTypes.FETCH_HERO_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case heroActionTypes.DELETE_HERO_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.DELETE_HERO_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.DELETE_HERO_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case heroActionTypes.ACTIVE_HERO_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.ACTIVE_HERO_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.ACTIVE_HERO_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case heroActionTypes.INACTIVE_HERO_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case heroActionTypes.INACTIVE_HERO_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case heroActionTypes.INACTIVE_HERO_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
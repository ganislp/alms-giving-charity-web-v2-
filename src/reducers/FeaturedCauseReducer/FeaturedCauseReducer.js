import * as heroFeaturedCauseActionTypes from '../../actions/actionTypes/heroFeaturedCauseActionTypes';

import _ from 'lodash';

const initialUserState = {
  heroFeaturedCauseDetails: {},
  heroFeaturedCauseImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case heroFeaturedCauseActionTypes.GET_HERO_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload }
    case heroFeaturedCauseActionTypes.GET_HERO_FEATURED_CAUSE_SUCCESS:
      return { ...state, heroFeaturedCauseDetails: { ..._.mapKeys(action.payload.heroFeaturedCauseDetails, 'uid') } }
    case heroFeaturedCauseActionTypes.GET_HERO_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload };

    case heroFeaturedCauseActionTypes.CREATE_HERO_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.CREATE_HERO_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.CREATE_HERO_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }

    case heroFeaturedCauseActionTypes.EDIT_HERO_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.EDIT_HERO_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.EDIT_HERO_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }

    case heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }

    case heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }


    case heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_ERROR:
      return { ...state, ...action.payload }


    case heroFeaturedCauseActionTypes.UPLOAD_HERO_FEATURED_CAUSE_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.UPLOAD_HERO_FEATURED_CAUSE_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.UPLOAD_HERO_FEATURED_CAUSE_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case heroFeaturedCauseActionTypes.FETCH_HERO_FEATURED_CAUSE_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case heroFeaturedCauseActionTypes.FETCH_HERO_FEATURED_CAUSE_IMAGES_SUCCESS:
      return { ...state, heroFeaturedCauseImages: { ..._.mapKeys(action.payload.heroFeaturedCauseImages, 'uid') } }
    case heroFeaturedCauseActionTypes.FETCH_HERO_FEATURED_CAUSE_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
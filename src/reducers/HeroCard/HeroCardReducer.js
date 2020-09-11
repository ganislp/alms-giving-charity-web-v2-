import * as HeroCardActionTypes from '../../actions/actionTypes/heroCardActionTypes';

import _ from 'lodash';

const initialUserState = {
  heroCardDetails: {},
  heroCardImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case HeroCardActionTypes.GET_HERO_CARD_REQUEST:
      return { ...state, ...action.payload }
    case HeroCardActionTypes.GET_HERO_CARD_SUCCESS:
      return { ...state, heroCardDetails: { ..._.mapKeys(action.payload.heroCardDetails, 'uid') } }
    case HeroCardActionTypes.GET_HERO_CARD_ERROR:
      return { ...state, ...action.payload };

    case HeroCardActionTypes.CREATE_HERO_CARD_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.CREATE_HERO_CARD_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.CREATE_HERO_CARD_ERROR:
      return { ...state, ...action.payload }

    case HeroCardActionTypes.EDIT_HERO_CARD_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.EDIT_HERO_CARD_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.EDIT_HERO_CARD_ERROR:
      return { ...state, ...action.payload }

    case HeroCardActionTypes.ACTIVE_HERO_CARD_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.ACTIVE_HERO_CARD_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.ACTIVE_HERO_CARD_ERROR:
      return { ...state, ...action.payload }

    case HeroCardActionTypes.INACTIVE_HERO_CARD_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.INACTIVE_HERO_CARD_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.INACTIVE_HERO_CARD_ERROR:
      return { ...state, ...action.payload }


    case HeroCardActionTypes.DELETE_HERO_CARD_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.DELETE_HERO_CARD_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.DELETE_HERO_CARD_ERROR:
      return { ...state, ...action.payload }


    case HeroCardActionTypes.UPLOAD_HERO_CARD_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.UPLOAD_HERO_CARD_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.UPLOAD_HERO_CARD_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case HeroCardActionTypes.FETCH_HERO_CARD_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case HeroCardActionTypes.FETCH_HERO_CARD_IMAGES_SUCCESS:
      return { ...state, heroCardImages: { ..._.mapKeys(action.payload.heroCardImages, 'uid') } }
    case HeroCardActionTypes.FETCH_HERO_CARD_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case HeroCardActionTypes.DELETE_HERO_CARD_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.DELETE_HERO_CARD_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.DELETE_HERO_CARD_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case HeroCardActionTypes.ACTIVE_HERO_CARD_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.ACTIVE_HERO_CARD_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.ACTIVE_HERO_CARD_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case HeroCardActionTypes.INACTIVE_HERO_CARD_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.INACTIVE_HERO_CARD_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroCardActionTypes.INACTIVE_HERO_CARD_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
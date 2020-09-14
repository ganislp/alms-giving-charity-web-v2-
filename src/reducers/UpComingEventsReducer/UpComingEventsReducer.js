import * as HeroUpComingEventsActionTypes from '../../actions/actionTypes/heroUpComingEventsActionTypes';

import _ from 'lodash';

const initialUserState = {
  heroUpComingEventsDetails: {},
  heroUpComingEventsImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case HeroUpComingEventsActionTypes.GET_HERO_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload }
    case HeroUpComingEventsActionTypes.GET_HERO_UP_COMING_EVENTS_SUCCESS:
      return { ...state, heroUpComingEventsDetails: { ..._.mapKeys(action.payload.heroUpComingEventsDetails, 'uid') } }
    case HeroUpComingEventsActionTypes.GET_HERO_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload };

    case HeroUpComingEventsActionTypes.CREATE_HERO_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.CREATE_HERO_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.CREATE_HERO_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.EDIT_HERO_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.EDIT_HERO_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.EDIT_HERO_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }


    case HeroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }


    case HeroUpComingEventsActionTypes.UPLOAD_HERO_UP_COMING_EVENTS_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.UPLOAD_HERO_UP_COMING_EVENTS_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.UPLOAD_HERO_UP_COMING_EVENTS_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case HeroUpComingEventsActionTypes.FETCH_HERO_UP_COMING_EVENTS_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case HeroUpComingEventsActionTypes.FETCH_HERO_UP_COMING_EVENTS_IMAGES_SUCCESS:
      return { ...state, heroUpComingEventsImages: { ..._.mapKeys(action.payload.heroUpComingEventsImages, 'uid') } }
    case HeroUpComingEventsActionTypes.FETCH_HERO_UP_COMING_EVENTS_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case HeroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
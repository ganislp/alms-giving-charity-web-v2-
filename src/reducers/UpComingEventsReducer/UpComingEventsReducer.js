import * as HeroUpComingEventsActionTypes from '../../actions/actionTypes/upComingEventsActionTypes';

import _ from 'lodash';

const initialUserState = {
  upComingEventsDetails: {},
  upComingEventsImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case HeroUpComingEventsActionTypes.GET_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload }
    case HeroUpComingEventsActionTypes.GET_UP_COMING_EVENTS_SUCCESS:
      return { ...state, upComingEventsDetails: { ..._.mapKeys(action.payload.upComingEventsDetails, 'uid') } }
    case HeroUpComingEventsActionTypes.GET_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload };

    case HeroUpComingEventsActionTypes.CREATE_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.CREATE_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.CREATE_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.EDIT_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.EDIT_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.EDIT_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }


    case HeroUpComingEventsActionTypes.DELETE_UP_COMING_EVENTS_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_UP_COMING_EVENTS_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_UP_COMING_EVENTS_ERROR:
      return { ...state, ...action.payload }


    case HeroUpComingEventsActionTypes.UPLOAD_UP_COMING_EVENTS_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.UPLOAD_UP_COMING_EVENTS_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.UPLOAD_UP_COMING_EVENTS_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case HeroUpComingEventsActionTypes.FETCH_UP_COMING_EVENTS_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case HeroUpComingEventsActionTypes.FETCH_UP_COMING_EVENTS_IMAGES_SUCCESS:
      return { ...state, upComingEventsImages: { ..._.mapKeys(action.payload.upComingEventsImages, 'uid') } }
    case HeroUpComingEventsActionTypes.FETCH_UP_COMING_EVENTS_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case HeroUpComingEventsActionTypes.DELETE_UP_COMING_EVENTS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_UP_COMING_EVENTS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.DELETE_UP_COMING_EVENTS_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case HeroUpComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case HeroUpComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
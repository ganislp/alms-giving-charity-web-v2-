import * as causesStatsActionTypes from '../../actions/actionTypes/causeStatsActionTypes';

import _ from 'lodash';

const initialUserState = {
  causesStatsDetails: {},
  causesStatsImages: {},
  causesStatsViewDetails: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case causesStatsActionTypes.GET_CAUSES_STATS_REQUEST:
      return { ...state, ...action.payload }
    case causesStatsActionTypes.GET_CAUSES_STATS_SUCCESS:
      return { ...state, causesStatsDetails: { ..._.mapKeys(action.payload.causesStatsDetails, 'uid') } }
    case causesStatsActionTypes.GET_CAUSES_STATS_ERROR:
      return { ...state, ...action.payload };

    case causesStatsActionTypes.CREATE_CAUSES_STATS_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.CREATE_CAUSES_STATS_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.CREATE_CAUSES_STATS_ERROR:
      return { ...state, ...action.payload }

    case causesStatsActionTypes.EDIT_CAUSES_STATS_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.EDIT_CAUSES_STATS_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.EDIT_CAUSES_STATS_ERROR:
      return { ...state, ...action.payload }

    case causesStatsActionTypes.ACTIVE_CAUSES_STATS_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.ACTIVE_CAUSES_STATS_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.ACTIVE_CAUSES_STATS_ERROR:
      return { ...state, ...action.payload }

    case causesStatsActionTypes.INACTIVE_CAUSES_STATS_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.INACTIVE_CAUSES_STATS_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.INACTIVE_CAUSES_STATS_ERROR:
      return { ...state, ...action.payload }


    case causesStatsActionTypes.DELETE_CAUSES_STATS_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.DELETE_CAUSES_STATS_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.DELETE_CAUSES_STATS_ERROR:
      return { ...state, ...action.payload }


    case causesStatsActionTypes.UPLOAD_CAUSES_STATS_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.UPLOAD_CAUSES_STATS_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.UPLOAD_CAUSES_STATS_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case causesStatsActionTypes.FETCH_CAUSES_STATS_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case causesStatsActionTypes.FETCH_CAUSES_STATS_IMAGES_SUCCESS:
      return { ...state, causesStatsImages: { ..._.mapKeys(action.payload.causesStatsImages, 'uid') } }
    case causesStatsActionTypes.FETCH_CAUSES_STATS_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case causesStatsActionTypes.DELETE_CAUSES_STATS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.DELETE_CAUSES_STATS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.DELETE_CAUSES_STATS_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case causesStatsActionTypes.ACTIVE_CAUSES_STATS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.ACTIVE_CAUSES_STATS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.ACTIVE_CAUSES_STATS_IMAGE_ERROR:
      return { ...state, ...action.payload }

    case causesStatsActionTypes.INACTIVE_CAUSES_STATS_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.INACTIVE_CAUSES_STATS_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case causesStatsActionTypes.INACTIVE_CAUSES_STATS_IMAGE_ERROR:
      return { ...state, ...action.payload }

      case causesStatsActionTypes.GET_CAUSES_STATS_VIEW_REQUEST:
        return { ...state, ...action.payload }
      case causesStatsActionTypes.GET_CAUSES_STATS_VIEW_SUCCESS:
        return { ...state, causesStatsViewDetails: { ..._.mapKeys(action.payload.causesStatsViewDetails, 'uid') } }
      case causesStatsActionTypes.GET_CAUSES_STATS_VIEW_ERROR:
        return { ...state, ...action.payload };
  
      case causesStatsActionTypes.CREATE_CAUSES_STATS_VIEW_REQUEST:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.CREATE_CAUSES_STATS_VIEW_SUCCESS:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.CREATE_CAUSES_STATS_VIEW_ERROR:
        return { ...state, ...action.payload }
  
      case causesStatsActionTypes.EDIT_CAUSES_STATS_VIEW_REQUEST:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.EDIT_CAUSES_STATS_VIEW_SUCCESS:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.EDIT_CAUSES_STATS_VIEW_ERROR:
        return { ...state, ...action.payload }
  
      case causesStatsActionTypes.ACTIVE_CAUSES_STATS_VIEW_REQUEST:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.ACTIVE_CAUSES_STATS_VIEW_SUCCESS:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.ACTIVE_CAUSES_STATS_VIEW_ERROR:
        return { ...state, ...action.payload }
  
      case causesStatsActionTypes.INACTIVE_CAUSES_STATS_VIEW_REQUEST:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.INACTIVE_CAUSES_STATS_VIEW_SUCCESS:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.INACTIVE_CAUSES_STATS_VIEW_ERROR:
        return { ...state, ...action.payload }
  
  
      case causesStatsActionTypes.DELETE_CAUSES_STATS_VIEW_REQUEST:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.DELETE_CAUSES_STATS_VIEW_SUCCESS:
        return { ...state, ...action.payload };
      case causesStatsActionTypes.DELETE_CAUSES_STATS_VIEW_ERROR:
        return { ...state, ...action.payload }
  
    default:
      return { ...state };
  }
}
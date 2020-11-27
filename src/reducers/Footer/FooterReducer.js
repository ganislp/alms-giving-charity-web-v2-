import * as footerActionTypes from '../../actions/actionTypes/footerActionTypes';
import _ from 'lodash';

const initialUserState = {
  footerBgImages: {},
};

export default (state = initialUserState, action) => {
  switch (action.type) {
   
    case footerActionTypes.UPLOAD_FOOTER_BG_IMAGES_REQUEST:
      return { ...state, ...action.payload };
    case footerActionTypes.UPLOAD_FOOTER_BG_IMAGES_SUCCESS:
      return { ...state, ...action.payload };
    case footerActionTypes.UPLOAD_FOOTER_BG_IMAGES_FAILURE:
      return { ...state, ...action.payload }


    case footerActionTypes.FETCH_FOOTER_BG_IMAGES_REQUEST:
      return { ...state, ...action.payload }
    case footerActionTypes.FETCH_FOOTER_BG_IMAGES_SUCCESS:
      return { ...state, footerBgImages: { ..._.mapKeys(action.payload.footerBgImages, 'uid') } }
    case footerActionTypes.FETCH_FOOTER_BG_IMAGES_ERROR:
      return { ...state, ...action.payload };


    case footerActionTypes.DELETE_FOOTER_BG_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case footerActionTypes.DELETE_FOOTER_BG_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case footerActionTypes.DELETE_FOOTER_BG_IMAGE_FAILURE:
      return { ...state, ...action.payload }

    case footerActionTypes.INACTIVE_FOOTER_BG_IMAGE_REQUEST:
      return { ...state, ...action.payload };
    case footerActionTypes.INACTIVE_FOOTER_BG_IMAGE_SUCCESS:
      return { ...state, ...action.payload };
    case footerActionTypes.INACTIVE_FOOTER_BG_IMAGE_ERROR:
      return { ...state, ...action.payload }
    default:
      return { ...state };
  }
}
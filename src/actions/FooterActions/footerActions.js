import * as footerActionTypes from '../actionTypes/footerActionTypes';

export const uploadFooterBgImagesRequest = () => {
  return {
    type: footerActionTypes.UPLOAD_FOOTER_BG_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadFooterBgImagesSuccess = () => {
  return {
    type: footerActionTypes.UPLOAD_FOOTER_BG_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadFooterBgImagesError = (error) => {
  return {
    type: footerActionTypes.UPLOAD_FOOTER_BG_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getFooterBgImagesRequest = () => {

  return {
    type: footerActionTypes.FETCH_FOOTER_BG_IMAGES_REQUEST,
    payload: { }
  }
};
export const getFooterBgImagesSuccess = (results) => {
  return {
    type: footerActionTypes.FETCH_FOOTER_BG_IMAGES_SUCCESS,
    payload: {  footerBgImages: { ...results } }

  }
};

export const getFooterBgImagesError = (error) => {
  return {
    type: footerActionTypes.FETCH_FOOTER_BG_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteFooterBgImageRequest = () => {

  return {
    type: footerActionTypes.DELETE_FOOTER_BG_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteFooterBgImageSuccess = (uid) => {
  return {
    type: footerActionTypes.DELETE_FOOTER_BG_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteFooterBgImageError = (error) => {
  return {
    type: footerActionTypes.DELETE_FOOTER_BG_IMAGE_FAILURE,
    payload: { error: error }
  }
};

export const inActiveFooterBgImageRequest = () => {

  return {
    type: footerActionTypes.INACTIVE_FOOTER_BG_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveFooterBgImageSuccess = (uid) => {
  return {
    type: footerActionTypes.INACTIVE_FOOTER_BG_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveFooterBgImageError = (error) => {
  return {
    type: footerActionTypes.INACTIVE_FOOTER_BG_IMAGE_ERROR,
    payload: {  error: error }
  }
};


export const activeFooterBgRequest = () => {

  return {
    type: footerActionTypes.ACTIVE_FOOTER_BG_IMAGE_REQUEST,
    payload: {  }
  }
};
export const activeFooterBgSuccess = (uid) => {
  return {
    type: footerActionTypes.ACTIVE_FOOTER_BG_IMAGE_SUCCESS,
    payload: { uid: uid, }

  }
};

export const activeFooterBgError = (error) => {
  return {
    type: footerActionTypes.ACTIVE_FOOTER_BG_IMAGE_ERROR,
    payload: {  error: error }
  } 
};
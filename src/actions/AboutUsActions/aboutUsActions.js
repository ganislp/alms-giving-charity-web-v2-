import * as aboutUsActionTypes from '../actionTypes/aboutUsActionTypes';


export const getAboutUsRequest = () => {

  return {
    type: aboutUsActionTypes.GET_ABOUT_US_REQUEST,
    payload: {  }
  }
};
export const getAboutUsSuccess = (results) => {
  return {
    type: aboutUsActionTypes.GET_ABOUT_US_SUCCESS,
    payload: { aboutUsDetails: { ...results } }

  }
};

export const getAboutUsError = (error) => {
  return {
    type: aboutUsActionTypes.GET_ABOUT_US_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createAboutUsRequest = () => {
  return {
    type: aboutUsActionTypes.CREATE_ABOUT_US_REQUEST,
    payload: {}
  }
};
export const createAboutUsSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.CREATE_ABOUT_US_SUCCESS,
    payload: { uid: uid, }

  }
};

export const createAboutUsError = (error) => {
  return {
    type: aboutUsActionTypes.CREATE_ABOUT_US_ERROR,
    payload: {  error: error }
  }
};


export const editAboutUsRequest = () => {

  return {
    type: aboutUsActionTypes.EDIT_ABOUT_US_REQUEST,
    payload: { onSubmiting: true }
  }
};
export const editAboutUsSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.EDIT_ABOUT_US_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editAboutUsError = (error) => {
  return {
    type: aboutUsActionTypes.EDIT_ABOUT_US_ERROR,
    payload: {  error: error }
  }
};


export const activeAboutUsRequest = () => {

  return {
    type: aboutUsActionTypes.ACTIVE_ABOUT_US_REQUEST,
    payload: { }
  }
};
export const activeAboutUsSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.ACTIVE_ABOUT_US_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeAboutUsError = (error) => {
  return {
    type: aboutUsActionTypes.ACTIVE_ABOUT_US_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveAboutUsRequest = () => {

  return {
    type: aboutUsActionTypes.INACTIVE_ABOUT_US_REQUEST,
    payload: {  }
  }
};
export const inActiveAboutUsSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.INACTIVE_ABOUT_US_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveAboutUsError = (error) => {
  return {
    type: aboutUsActionTypes.INACTIVE_ABOUT_US_ERROR,
    payload: {  error: error }
  }
};


export const deleteAboutUsRequest = () => {

  return {
    type: aboutUsActionTypes.DELETE_ABOUT_US_REQUEST,
    payload: {  }
  }
};
export const deleteAboutUsSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.DELETE_ABOUT_US_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteAboutUsError = (error) => {
  return {
    type: aboutUsActionTypes.DELETE_ABOUT_US_ERROR,
    payload: {  error: error }
  }
};


export const uploadAboutUsImagesRequest = () => {
  return {
    type: aboutUsActionTypes.UPLOAD_ABOUT_US_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadAboutUsImagesSuccess = () => {
  return {
    type: aboutUsActionTypes.UPLOAD_ABOUT_US_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadAboutUsImagesError = (error) => {
  return {
    type: aboutUsActionTypes.UPLOAD_ABOUT_US_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getAboutUsImagesRequest = () => {

  return {
    type: aboutUsActionTypes.FETCH_ABOUT_US_IMAGES_REQUEST,
    payload: { }
  }
};
export const getAboutUsImagesSuccess = (results) => {
  return {
    type: aboutUsActionTypes.FETCH_ABOUT_US_IMAGES_SUCCESS,
    payload: {  aboutUsImages: { ...results } }

  }
};

export const getAboutUsImagesError = (error) => {
  return {
    type: aboutUsActionTypes.FETCH_ABOUT_US_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteAboutUsImageRequest = () => {

  return {
    type: aboutUsActionTypes.DELETE_ABOUT_US_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteAboutUsImageSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.DELETE_ABOUT_US_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteAboutUsImageError = (error) => {
  return {
    type: aboutUsActionTypes.DELETE_ABOUT_US_IMAGE_FAILURE,
    payload: { error: error }
  }
};

export const inActiveAboutUsImageRequest = () => {

  return {
    type: aboutUsActionTypes.INACTIVE_ABOUT_US_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveAboutUsImageSuccess = (uid) => {
  return {
    type: aboutUsActionTypes.INACTIVE_ABOUT_US_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveAboutUsImageError = (error) => {
  return {
    type: aboutUsActionTypes.INACTIVE_ABOUT_US_IMAGE_ERROR,
    payload: {  error: error }
  }
};

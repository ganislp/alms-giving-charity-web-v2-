import * as heroActionTypes from '../actionTypes/heroActionTypes';


export const getHeroRequest = () => {

  return {
    type: heroActionTypes.GET_HERO_REQUEST,
    payload: {  }
  }
};
export const getHeroSuccess = (results) => {
  return {
    type: heroActionTypes.GET_HERO_SUCCESS,
    payload: { heroDetails: { ...results } }

  }
};

export const getHeroError = (error) => {
  return {
    type: heroActionTypes.GET_HERO_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createHeroRequest = () => {
  return {
    type: heroActionTypes.CREATE_HERO_REQUEST,
    payload: { }
  }
};
export const createHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.CREATE_HERO_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const createHeroError = (error) => {
  return {
    type: heroActionTypes.CREATE_HERO_ERROR,
    payload: {  error: error }
  }
};


export const editHeroRequest = () => {

  return {
    type: heroActionTypes.EDIT_HERO_REQUEST,
    payload: { }
  }
};
export const editHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.EDIT_HERO_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editHeroError = (error) => {
  return {
    type: heroActionTypes.EDIT_HERO_ERROR,
    payload: { error: error }
  }
};


export const activeHeroRequest = () => {

  return {
    type: heroActionTypes.ACTIVE_HERO_REQUEST,
    payload: {  }
  }
};
export const activeHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.ACTIVE_HERO_SUCCESS,
    payload: { uid: uid, }

  }
};

export const activeHeroError = (error) => {
  return {
    type: heroActionTypes.ACTIVE_HERO_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveHeroRequest = () => {

  return {
    type: heroActionTypes.INACTIVE_HERO_REQUEST,
    payload: { }
  }
};
export const inActiveHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.INACTIVE_HERO_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroError = (error) => {
  return {
    type: heroActionTypes.INACTIVE_HERO_ERROR,
    payload: { onSubmiting: false, error: error }
  }
};


export const deleteHeroRequest = () => {

  return {
    type: heroActionTypes.DELETE_HERO_REQUEST,
    payload: { }
  }
};
export const deleteHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.DELETE_HERO_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroError = (error) => {
  return {
    type: heroActionTypes.DELETE_HERO_ERROR,
    payload: {  error: error }
  }
};


export const uploadHeroImagesRequest = () => {
  return {
    type: heroActionTypes.UPLOAD_HERO_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadHeroImagesSuccess = () => {
  return {
    type: heroActionTypes.UPLOAD_HERO_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadHeroImagesError = (error) => {
  return {
    type: heroActionTypes.UPLOAD_HERO_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getHeroImagesRequest = () => {

  return {
    type: heroActionTypes.FETCH_HERO_IMAGES_REQUEST,
    payload: { }
  }
};
export const getHeroImagesSuccess = (results) => {
  return {
    type: heroActionTypes.FETCH_HERO_IMAGES_SUCCESS,
    payload: {  heroImages: { ...results } }

  }
};

export const getHeroImagesError = (error) => {
  return {
    type: heroActionTypes.FETCH_HERO_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteHeroImageRequest = () => {

  return {
    type: heroActionTypes.DELETE_HERO_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteHeroImageSuccess = (uid) => {
  return {
    type: heroActionTypes.DELETE_HERO_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroImageError = (error) => {
  return {
    type: heroActionTypes.DELETE_HERO_IMAGE_FAILURE,
    payload: { error: error }
  }
};

export const inActiveHeroImageRequest = () => {

  return {
    type: heroActionTypes.INACTIVE_HERO_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveHeroImageSuccess = (uid) => {
  return {
    type: heroActionTypes.INACTIVE_HERO_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroImageError = (error) => {
  return {
    type: heroActionTypes.INACTIVE_HERO_IMAGE_ERROR,
    payload: {  error: error }
  }
};

import * as heroCardActionTypes from '../actionTypes/heroCardActionTypes';


export const getHeroCardRequest = () => {

  return {
    type: heroCardActionTypes.GET_HERO_CARD_REQUEST,
    payload: {  }
  }
};
export const getHeroCardSuccess = (results) => {
  return {
    type: heroCardActionTypes.GET_HERO_CARD_SUCCESS,
    payload: { heroCardDetails: { ...results } }

  }
};

export const getHeroCardError = (error) => {
  return {
    type: heroCardActionTypes.GET_HERO_CARD_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createHeroCardRequest = () => {
  return {
    type: heroCardActionTypes.CREATE_HERO_CARD_REQUEST,
    payload: {}
  }
};
export const createHeroCardSuccess = (uid) => {
  return {
    type: heroCardActionTypes.CREATE_HERO_CARD_SUCCESS,
    payload: { uid: uid, }

  }
};

export const createHeroCardError = (error) => {
  return {
    type: heroCardActionTypes.CREATE_HERO_CARD_ERROR,
    payload: {  error: error }
  }
};


export const editHeroCardRequest = () => {

  return {
    type: heroCardActionTypes.EDIT_HERO_CARD_REQUEST,
    payload: { onSubmiting: true }
  }
};
export const editHeroCardSuccess = (uid) => {
  return {
    type: heroCardActionTypes.EDIT_HERO_CARD_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editHeroCardError = (error) => {
  return {
    type: heroCardActionTypes.EDIT_HERO_CARD_ERROR,
    payload: {  error: error }
  }
};


export const activeHeroCardRequest = () => {

  return {
    type: heroCardActionTypes.ACTIVE_HERO_CARD_REQUEST,
    payload: { }
  }
};
export const activeHeroCardSuccess = (uid) => {
  return {
    type: heroCardActionTypes.ACTIVE_HERO_CARD_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeHeroCardError = (error) => {
  return {
    type: heroCardActionTypes.ACTIVE_HERO_CARD_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveHeroCardRequest = () => {

  return {
    type: heroCardActionTypes.INACTIVE_HERO_CARD_REQUEST,
    payload: {  }
  }
};
export const inActiveHeroCardSuccess = (uid) => {
  return {
    type: heroCardActionTypes.INACTIVE_HERO_CARD_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroCardError = (error) => {
  return {
    type: heroCardActionTypes.INACTIVE_HERO_CARD_ERROR,
    payload: {  error: error }
  }
};


export const deleteHeroCardRequest = () => {

  return {
    type: heroCardActionTypes.DELETE_HERO_CARD_REQUEST,
    payload: {  }
  }
};
export const deleteHeroCardSuccess = (uid) => {
  return {
    type: heroCardActionTypes.DELETE_HERO_CARD_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroCardError = (error) => {
  return {
    type: heroCardActionTypes.DELETE_HERO_CARD_ERROR,
    payload: {  error: error }
  }
};


export const uploadHeroCardImagesRequest = () => {
  return {
    type: heroCardActionTypes.UPLOAD_HERO_CARD_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadHeroCardImagesSuccess = () => {
  return {
    type: heroCardActionTypes.UPLOAD_HERO_CARD_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadHeroCardImagesError = (error) => {
  return {
    type: heroCardActionTypes.UPLOAD_HERO_CARD_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getHeroCardImagesRequest = () => {

  return {
    type: heroCardActionTypes.FETCH_HERO_CARD_IMAGES_REQUEST,
    payload: { }
  }
};
export const getHeroCardImagesSuccess = (results) => {
  return {
    type: heroCardActionTypes.FETCH_HERO_CARD_IMAGES_SUCCESS,
    payload: {  heroCardImages: { ...results } }

  }
};

export const getHeroCardImagesError = (error) => {
  return {
    type: heroCardActionTypes.FETCH_HERO_CARD_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteHeroCardImageRequest = () => {

  return {
    type: heroCardActionTypes.DELETE_HERO_CARD_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteHeroCardImageSuccess = (uid) => {
  return {
    type: heroCardActionTypes.DELETE_HERO_CARD_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroCardImageError = (error) => {
  return {
    type: heroCardActionTypes.DELETE_HERO_CARD_IMAGE_FAILURE,
    payload: { error: error }
  }
};

export const inActiveHeroCardImageRequest = () => {

  return {
    type: heroCardActionTypes.INACTIVE_HERO_CARD_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveHeroCardImageSuccess = (uid) => {
  return {
    type: heroCardActionTypes.INACTIVE_HERO_CARD_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroCardImageError = (error) => {
  return {
    type: heroCardActionTypes.INACTIVE_HERO_CARD_IMAGE_ERROR,
    payload: {  error: error }
  }
};

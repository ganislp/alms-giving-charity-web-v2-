import * as heroFeaturedCauseActionTypes from '../actionTypes/heroFeaturedCauseActionTypes';


export const getHeroFeaturedCauseRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.GET_HERO_FEATURED_CAUSE_REQUEST,
    payload: {  }
  }
};
export const getHeroFeaturedCauseSuccess = (results) => {
  return {
    type: heroFeaturedCauseActionTypes.GET_HERO_FEATURED_CAUSE_SUCCESS,
    payload: { heroFeaturedCauseDetails: { ...results } }

  }
};

export const getHeroFeaturedCauseError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.GET_HERO_FEATURED_CAUSE_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createHeroFeaturedCauseRequest = () => {
  return {
    type: heroFeaturedCauseActionTypes.CREATE_HERO_FEATURED_CAUSE_REQUEST,
    payload: {}
  }
};
export const createHeroFeaturedCauseSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.CREATE_HERO_FEATURED_CAUSE_SUCCESS,
    payload: { uid: uid, }

  }
};

export const createHeroFeaturedCauseError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.CREATE_HERO_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const editHeroFeaturedCauseRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.EDIT_HERO_FEATURED_CAUSE_REQUEST,
    payload: { onSubmiting: true }
  }
};
export const editHeroFeaturedCauseSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.EDIT_HERO_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editHeroFeaturedCauseError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.EDIT_HERO_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const activeHeroFeaturedCauseRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_REQUEST,
    payload: { }
  }
};
export const activeHeroFeaturedCauseSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeHeroFeaturedCauseError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveHeroFeaturedCauseRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_REQUEST,
    payload: {  }
  }
};
export const inActiveHeroFeaturedCauseSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroFeaturedCauseError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const deleteHeroFeaturedCauseRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_REQUEST,
    payload: {  }
  }
};
export const deleteHeroFeaturedCauseSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroFeaturedCauseError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const uploadHeroFeaturedCauseImagesRequest = () => {
  return {
    type: heroFeaturedCauseActionTypes.UPLOAD_HERO_FEATURED_CAUSE_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadHeroFeaturedCauseImagesSuccess = () => {
  return {
    type: heroFeaturedCauseActionTypes.UPLOAD_HERO_FEATURED_CAUSE_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadHeroFeaturedCauseImagesError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.UPLOAD_HERO_FEATURED_CAUSE_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getHeroFeaturedCauseImagesRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.FETCH_HERO_FEATURED_CAUSE_IMAGES_REQUEST,
    payload: { }
  }
};
export const getHeroFeaturedCauseImagesSuccess = (results) => {
  return {
    type: heroFeaturedCauseActionTypes.FETCH_HERO_FEATURED_CAUSE_IMAGES_SUCCESS,
    payload: {  heroFeaturedCauseImages: { ...results } }

  }
};

export const getHeroFeaturedCauseImagesError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.FETCH_HERO_FEATURED_CAUSE_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteHeroFeaturedCauseImageRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteHeroFeaturedCauseImageSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroFeaturedCauseImageError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.DELETE_HERO_FEATURED_CAUSE_IMAGE_FAILURE,
    payload: { error: error }
  }
};


export const activeHeroFeaturedCauseImageRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_IMAGE_REQUEST,
    payload: { }
  }
};
export const activeHeroFeaturedCauseImageSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeHeroFeaturedCauseImageError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.ACTIVE_HERO_FEATURED_CAUSE_IMAGE_ERROR,
    payload: {  error: error }
  }
};

export const inActiveHeroFeaturedCauseImageRequest = () => {

  return {
    type: heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveHeroFeaturedCauseImageSuccess = (uid) => {
  return {
    type: heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroFeaturedCauseImageError = (error) => {
  return {
    type: heroFeaturedCauseActionTypes.INACTIVE_HERO_FEATURED_CAUSE_IMAGE_ERROR,
    payload: {  error: error }
  }
};

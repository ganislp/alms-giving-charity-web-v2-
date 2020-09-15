import * as featuredCauseActionTypes from '../actionTypes/featuredCauseActionTypes';


export const getFeaturedCauseRequest = () => {

  return {
    type: featuredCauseActionTypes.GET_FEATURED_CAUSE_REQUEST,
    payload: {  }
  }
};
export const getFeaturedCauseSuccess = (results) => {
  return {
    type: featuredCauseActionTypes.GET_FEATURED_CAUSE_SUCCESS,
    payload: { featuredCauseDetails: { ...results } }

  }
};

export const getFeaturedCauseError = (error) => {
  return {
    type: featuredCauseActionTypes.GET_FEATURED_CAUSE_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createFeaturedCauseRequest = () => {
  return {
    type: featuredCauseActionTypes.CREATE_FEATURED_CAUSE_REQUEST,
    payload: {}
  }
};
export const createFeaturedCauseSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.CREATE_FEATURED_CAUSE_SUCCESS,
    payload: { uid: uid, }

  }
};

export const createFeaturedCauseError = (error) => {
  return {
    type: featuredCauseActionTypes.CREATE_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const editFeaturedCauseRequest = () => {

  return {
    type: featuredCauseActionTypes.EDIT_FEATURED_CAUSE_REQUEST,
    payload: { onSubmiting: true }
  }
};
export const editFeaturedCauseSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.EDIT_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editFeaturedCauseError = (error) => {
  return {
    type: featuredCauseActionTypes.EDIT_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const activeFeaturedCauseRequest = () => {

  return {
    type: featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_REQUEST,
    payload: { }
  }
};
export const activeFeaturedCauseSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeFeaturedCauseError = (error) => {
  return {
    type: featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveFeaturedCauseRequest = () => {

  return {
    type: featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_REQUEST,
    payload: {  }
  }
};
export const inActiveFeaturedCauseSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveFeaturedCauseError = (error) => {
  return {
    type: featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const deleteFeaturedCauseRequest = () => {

  return {
    type: featuredCauseActionTypes.DELETE_FEATURED_CAUSE_REQUEST,
    payload: {  }
  }
};
export const deleteFeaturedCauseSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.DELETE_FEATURED_CAUSE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteFeaturedCauseError = (error) => {
  return {
    type: featuredCauseActionTypes.DELETE_FEATURED_CAUSE_ERROR,
    payload: {  error: error }
  }
};


export const uploadFeaturedCauseImagesRequest = () => {
  return {
    type: featuredCauseActionTypes.UPLOAD_FEATURED_CAUSE_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadFeaturedCauseImagesSuccess = () => {
  return {
    type: featuredCauseActionTypes.UPLOAD_FEATURED_CAUSE_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadFeaturedCauseImagesError = (error) => {
  return {
    type: featuredCauseActionTypes.UPLOAD_FEATURED_CAUSE_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getFeaturedCauseImagesRequest = () => {

  return {
    type: featuredCauseActionTypes.FETCH_FEATURED_CAUSE_IMAGES_REQUEST,
    payload: { }
  }
};
export const getFeaturedCauseImagesSuccess = (results) => {
  return {
    type: featuredCauseActionTypes.FETCH_FEATURED_CAUSE_IMAGES_SUCCESS,
    payload: {  featuredCauseImages: { ...results } }

  }
};

export const getFeaturedCauseImagesError = (error) => {
  return {
    type: featuredCauseActionTypes.FETCH_FEATURED_CAUSE_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteFeaturedCauseImageRequest = () => {

  return {
    type: featuredCauseActionTypes.DELETE_FEATURED_CAUSE_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteFeaturedCauseImageSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.DELETE_FEATURED_CAUSE_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteFeaturedCauseImageError = (error) => {
  return {
    type: featuredCauseActionTypes.DELETE_FEATURED_CAUSE_IMAGE_FAILURE,
    payload: { error: error }
  }
};


export const activeFeaturedCauseImageRequest = () => {

  return {
    type: featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_IMAGE_REQUEST,
    payload: { }
  }
};
export const activeFeaturedCauseImageSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeFeaturedCauseImageError = (error) => {
  return {
    type: featuredCauseActionTypes.ACTIVE_FEATURED_CAUSE_IMAGE_ERROR,
    payload: {  error: error }
  }
};

export const inActiveFeaturedCauseImageRequest = () => {

  return {
    type: featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveFeaturedCauseImageSuccess = (uid) => {
  return {
    type: featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveFeaturedCauseImageError = (error) => {
  return {
    type: featuredCauseActionTypes.INACTIVE_FEATURED_CAUSE_IMAGE_ERROR,
    payload: {  error: error }
  }
};

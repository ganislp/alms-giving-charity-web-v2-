import * as ourCausesActionTypes from '../actionTypes/ourCausesActionTypes';


export const getOurCausesRequest = () => {

  return {
    type: ourCausesActionTypes.GET_OUR_CAUSES_REQUEST,
    payload: {  }
  }
};
export const getOurCausesSuccess = (results) => {
  return {
    type: ourCausesActionTypes.GET_OUR_CAUSES_SUCCESS,
    payload: { ourCausesDetails: { ...results } }

  }
};

export const getOurCausesError = (error) => {
  return {
    type: ourCausesActionTypes.GET_OUR_CAUSES_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createOurCausesRequest = () => {
  return {
    type: ourCausesActionTypes.CREATE_OUR_CAUSES_REQUEST,
    payload: { }
  }
};
export const createOurCausesSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.CREATE_OUR_CAUSES_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const createOurCausesError = (error) => {
  return {
    type: ourCausesActionTypes.CREATE_OUR_CAUSES_ERROR,
    payload: {  error: error }
  }
};


export const editOurCausesRequest = () => {

  return {
    type: ourCausesActionTypes.EDIT_OUR_CAUSES_REQUEST,
    payload: { }
  }
};
export const editOurCausesSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.EDIT_OUR_CAUSES_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editOurCausesError = (error) => {
  return {
    type: ourCausesActionTypes.EDIT_OUR_CAUSES_ERROR,
    payload: { error: error }
  }
};


export const activeOurCausesRequest = () => {

  return {
    type: ourCausesActionTypes.ACTIVE_OUR_CAUSES_REQUEST,
    payload: {  }
  }
};
export const activeOurCausesSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.ACTIVE_OUR_CAUSES_SUCCESS,
    payload: { uid: uid, }

  }
};

export const activeOurCausesError = (error) => {
  return {
    type: ourCausesActionTypes.ACTIVE_OUR_CAUSES_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveOurCausesRequest = () => {

  return {
    type: ourCausesActionTypes.INACTIVE_OUR_CAUSES_REQUEST,
    payload: { }
  }
};
export const inActiveOurCausesSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.INACTIVE_OUR_CAUSES_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveOurCausesError = (error) => {
  return {
    type: ourCausesActionTypes.INACTIVE_OUR_CAUSES_ERROR,
    payload: { onSubmiting: false, error: error }
  }
};


export const deleteOurCausesRequest = () => {

  return {
    type: ourCausesActionTypes.DELETE_OUR_CAUSES_REQUEST,
    payload: { }
  }
};
export const deleteOurCausesSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.DELETE_OUR_CAUSES_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteOurCausesError = (error) => {
  return {
    type: ourCausesActionTypes.DELETE_OUR_CAUSES_ERROR,
    payload: {  error: error }
  }
};


export const uploadOurCausesImagesRequest = () => {
  return {
    type: ourCausesActionTypes.UPLOAD_OUR_CAUSES_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadOurCausesImagesSuccess = () => {
  return {
    type: ourCausesActionTypes.UPLOAD_OUR_CAUSES_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadOurCausesImagesError = (error) => {
  return {
    type: ourCausesActionTypes.UPLOAD_OUR_CAUSES_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getOurCausesImagesRequest = () => {

  return {
    type: ourCausesActionTypes.FETCH_OUR_CAUSES_IMAGES_REQUEST,
    payload: { }
  }
};
export const getOurCausesImagesSuccess = (results) => {
  return {
    type: ourCausesActionTypes.FETCH_OUR_CAUSES_IMAGES_SUCCESS,
    payload: {  ourCausesImages: { ...results } }

  }
};

export const getOurCausesImagesError = (error) => {
  return {
    type: ourCausesActionTypes.FETCH_OUR_CAUSES_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteOurCausesImageRequest = () => {

  return {
    type: ourCausesActionTypes.DELETE_OUR_CAUSES_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteOurCausesImageSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.DELETE_OUR_CAUSES_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteOurCausesImageError = (error) => {
  return {
    type: ourCausesActionTypes.DELETE_OUR_CAUSES_IMAGE_FAILURE,
    payload: { error: error }
  }
};

export const inActiveOurCausesImageRequest = () => {

  return {
    type: ourCausesActionTypes.INACTIVE_OUR_CAUSES_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveOurCausesImageSuccess = (uid) => {
  return {
    type: ourCausesActionTypes.INACTIVE_OUR_CAUSES_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveOurCausesImageError = (error) => {
  return {
    type: ourCausesActionTypes.INACTIVE_OUR_CAUSES_IMAGE_ERROR,
    payload: {  error: error }
  }
};

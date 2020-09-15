import * as upComingEventsActionTypes from '../actionTypes/upComingEventsActionTypes';


export const getUpComingEventsRequest = () => {

  return {
    type:upComingEventsActionTypes.GET_UP_COMING_EVENTS_REQUEST,
    payload: {  }
  }
};
export const getUpComingEventsSuccess = (results) => {
  return {
    type:upComingEventsActionTypes.GET_UP_COMING_EVENTS_SUCCESS,
    payload: {upComingEventsDetails: { ...results } }

  }
};

export const getUpComingEventsError = (error) => {
  return {
    type:upComingEventsActionTypes.GET_UP_COMING_EVENTS_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createUpComingEventsRequest = () => {
  return {
    type:upComingEventsActionTypes.CREATE_UP_COMING_EVENTS_REQUEST,
    payload: {}
  }
};
export const createUpComingEventsSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.CREATE_UP_COMING_EVENTS_SUCCESS,
    payload: { uid: uid, }

  }
};

export const createUpComingEventsError = (error) => {
  return {
    type:upComingEventsActionTypes.CREATE_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const editUpComingEventsRequest = () => {

  return {
    type:upComingEventsActionTypes.EDIT_UP_COMING_EVENTS_REQUEST,
    payload: { onSubmiting: true }
  }
};
export const editUpComingEventsSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.EDIT_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editUpComingEventsError = (error) => {
  return {
    type:upComingEventsActionTypes.EDIT_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const activeUpComingEventsRequest = () => {

  return {
    type:upComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_REQUEST,
    payload: { }
  }
};
export const activeUpComingEventsSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeUpComingEventsError = (error) => {
  return {
    type:upComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveUpComingEventsRequest = () => {

  return {
    type:upComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_REQUEST,
    payload: {  }
  }
};
export const inActiveUpComingEventsSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveUpComingEventsError = (error) => {
  return {
    type:upComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const deleteUpComingEventsRequest = () => {

  return {
    type:upComingEventsActionTypes.DELETE_UP_COMING_EVENTS_REQUEST,
    payload: {  }
  }
};
export const deleteUpComingEventsSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.DELETE_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteUpComingEventsError = (error) => {
  return {
    type:upComingEventsActionTypes.DELETE_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const uploadUpComingEventsImagesRequest = () => {
  return {
    type:upComingEventsActionTypes.UPLOAD_UP_COMING_EVENTS_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadUpComingEventsImagesSuccess = () => {
  return {
    type:upComingEventsActionTypes.UPLOAD_UP_COMING_EVENTS_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadUpComingEventsImagesError = (error) => {
  return {
    type:upComingEventsActionTypes.UPLOAD_UP_COMING_EVENTS_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getUpComingEventsImagesRequest = () => {

  return {
    type:upComingEventsActionTypes.FETCH_UP_COMING_EVENTS_IMAGES_REQUEST,
    payload: { }
  }
};
export const getUpComingEventsImagesSuccess = (results) => {
  return {
    type:upComingEventsActionTypes.FETCH_UP_COMING_EVENTS_IMAGES_SUCCESS,
    payload: { upComingEventsImages: { ...results } }

  }
};

export const getUpComingEventsImagesError = (error) => {
  return {
    type:upComingEventsActionTypes.FETCH_UP_COMING_EVENTS_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteUpComingEventsImageRequest = () => {

  return {
    type:upComingEventsActionTypes.DELETE_UP_COMING_EVENTS_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteUpComingEventsImageSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.DELETE_UP_COMING_EVENTS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteUpComingEventsImageError = (error) => {
  return {
    type:upComingEventsActionTypes.DELETE_UP_COMING_EVENTS_IMAGE_FAILURE,
    payload: { error: error }
  }
};


export const activeUpComingEventsImageRequest = () => {

  return {
    type:upComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_IMAGE_REQUEST,
    payload: { }
  }
};
export const activeUpComingEventsImageSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeUpComingEventsImageError = (error) => {
  return {
    type:upComingEventsActionTypes.ACTIVE_UP_COMING_EVENTS_IMAGE_ERROR,
    payload: {  error: error }
  }
};

export const inActiveUpComingEventsImageRequest = () => {

  return {
    type:upComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveUpComingEventsImageSuccess = (uid) => {
  return {
    type:upComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveUpComingEventsImageError = (error) => {
  return {
    type:upComingEventsActionTypes.INACTIVE_UP_COMING_EVENTS_IMAGE_ERROR,
    payload: {  error: error }
  }
};

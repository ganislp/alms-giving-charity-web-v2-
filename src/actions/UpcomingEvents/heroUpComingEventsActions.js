import * as heroUpComingEventsActionTypes from '../actionTypes/heroUpComingEventsActionTypes';


export const getHeroUpComingEventsRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.GET_HERO_UP_COMING_EVENTS_REQUEST,
    payload: {  }
  }
};
export const getHeroUpComingEventsSuccess = (results) => {
  return {
    type: heroUpComingEventsActionTypes.GET_HERO_UP_COMING_EVENTS_SUCCESS,
    payload: { heroUpComingEventsDetails: { ...results } }

  }
};

export const getHeroUpComingEventsError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.GET_HERO_UP_COMING_EVENTS_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createHeroUpComingEventsRequest = () => {
  return {
    type: heroUpComingEventsActionTypes.CREATE_HERO_UP_COMING_EVENTS_REQUEST,
    payload: {}
  }
};
export const createHeroUpComingEventsSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.CREATE_HERO_UP_COMING_EVENTS_SUCCESS,
    payload: { uid: uid, }

  }
};

export const createHeroUpComingEventsError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.CREATE_HERO_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const editHeroUpComingEventsRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.EDIT_HERO_UP_COMING_EVENTS_REQUEST,
    payload: { onSubmiting: true }
  }
};
export const editHeroUpComingEventsSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.EDIT_HERO_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editHeroUpComingEventsError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.EDIT_HERO_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const activeHeroUpComingEventsRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_REQUEST,
    payload: { }
  }
};
export const activeHeroUpComingEventsSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeHeroUpComingEventsError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveHeroUpComingEventsRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_REQUEST,
    payload: {  }
  }
};
export const inActiveHeroUpComingEventsSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroUpComingEventsError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const deleteHeroUpComingEventsRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_REQUEST,
    payload: {  }
  }
};
export const deleteHeroUpComingEventsSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroUpComingEventsError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_ERROR,
    payload: {  error: error }
  }
};


export const uploadHeroUpComingEventsImagesRequest = () => {
  return {
    type: heroUpComingEventsActionTypes.UPLOAD_HERO_UP_COMING_EVENTS_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadHeroUpComingEventsImagesSuccess = () => {
  return {
    type: heroUpComingEventsActionTypes.UPLOAD_HERO_UP_COMING_EVENTS_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadHeroUpComingEventsImagesError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.UPLOAD_HERO_UP_COMING_EVENTS_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getHeroUpComingEventsImagesRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.FETCH_HERO_UP_COMING_EVENTS_IMAGES_REQUEST,
    payload: { }
  }
};
export const getHeroUpComingEventsImagesSuccess = (results) => {
  return {
    type: heroUpComingEventsActionTypes.FETCH_HERO_UP_COMING_EVENTS_IMAGES_SUCCESS,
    payload: {  heroUpComingEventsImages: { ...results } }

  }
};

export const getHeroUpComingEventsImagesError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.FETCH_HERO_UP_COMING_EVENTS_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteHeroUpComingEventsImageRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteHeroUpComingEventsImageSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteHeroUpComingEventsImageError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.DELETE_HERO_UP_COMING_EVENTS_IMAGE_FAILURE,
    payload: { error: error }
  }
};


export const activeHeroUpComingEventsImageRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_IMAGE_REQUEST,
    payload: { }
  }
};
export const activeHeroUpComingEventsImageSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const activeHeroUpComingEventsImageError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.ACTIVE_HERO_UP_COMING_EVENTS_IMAGE_ERROR,
    payload: {  error: error }
  }
};

export const inActiveHeroUpComingEventsImageRequest = () => {

  return {
    type: heroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveHeroUpComingEventsImageSuccess = (uid) => {
  return {
    type: heroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveHeroUpComingEventsImageError = (error) => {
  return {
    type: heroUpComingEventsActionTypes.INACTIVE_HERO_UP_COMING_EVENTS_IMAGE_ERROR,
    payload: {  error: error }
  }
};

import * as causesStatsActionTypes from '../actionTypes/causeStatsActionTypes';


export const getCausesStatsRequest = () => {

  return {
    type: causesStatsActionTypes.GET_CAUSES_STATS_REQUEST,
    payload: {  }
  }
};
export const getCausesStatsSuccess = (results) => {
  return {
    type: causesStatsActionTypes.GET_CAUSES_STATS_SUCCESS,
    payload: { causesStatsDetails: { ...results } }

  }
};

export const getCausesStatsError = (error) => {
  return {
    type: causesStatsActionTypes.GET_CAUSES_STATS_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createCausesStatsRequest = () => {
  return {
    type: causesStatsActionTypes.CREATE_CAUSES_STATS_REQUEST,
    payload: { }
  }
};
export const createCausesStatsSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.CREATE_CAUSES_STATS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const createCausesStatsError = (error) => {
  return {
    type: causesStatsActionTypes.CREATE_CAUSES_STATS_ERROR,
    payload: {  error: error }
  }
};


export const editCausesStatsRequest = () => {

  return {
    type: causesStatsActionTypes.EDIT_CAUSES_STATS_REQUEST,
    payload: { }
  }
};
export const editCausesStatsSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.EDIT_CAUSES_STATS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editCausesStatsError = (error) => {
  return {
    type: causesStatsActionTypes.EDIT_CAUSES_STATS_ERROR,
    payload: { error: error }
  }
};


export const activeCausesStatsRequest = () => {

  return {
    type: causesStatsActionTypes.ACTIVE_CAUSES_STATS_REQUEST,
    payload: {  }
  }
};
export const activeCausesStatsSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.ACTIVE_CAUSES_STATS_SUCCESS,
    payload: { uid: uid, }

  }
};

export const activeCausesStatsError = (error) => {
  return {
    type: causesStatsActionTypes.ACTIVE_CAUSES_STATS_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveCausesStatsRequest = () => {

  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_REQUEST,
    payload: { }
  }
};
export const inActiveCausesStatsSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveCausesStatsError = (error) => {
  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_ERROR,
    payload: { onSubmiting: false, error: error }
  }
};


export const deleteCausesStatsRequest = () => {

  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_REQUEST,
    payload: { }
  }
};
export const deleteCausesStatsSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteCausesStatsError = (error) => {
  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_ERROR,
    payload: {  error: error }
  }
};


export const uploadCausesStatsImagesRequest = () => {
  return {
    type: causesStatsActionTypes.UPLOAD_CAUSES_STATS_IMAGES_REQUEST,
    payload: {}
  }
};
export const uploadCausesStatsImagesSuccess = () => {
  return {
    type: causesStatsActionTypes.UPLOAD_CAUSES_STATS_IMAGES_SUCCESS,
    payload: {}

  }
};

export const uploadCausesStatsImagesError = (error) => {
  return {
    type: causesStatsActionTypes.UPLOAD_CAUSES_STATS_IMAGES_FAILURE,
    payload: {  error: error }
  }
  
};


export const getCausesStatsImagesRequest = () => {

  return {
    type: causesStatsActionTypes.FETCH_CAUSES_STATS_IMAGES_REQUEST,
    payload: { }
  }
};
export const getCausesStatsImagesSuccess = (results) => {
  return {
    type: causesStatsActionTypes.FETCH_CAUSES_STATS_IMAGES_SUCCESS,
    payload: {  causesStatsImages: { ...results } }

  }
};

export const getCausesStatsImagesError = (error) => {
  return {
    type: causesStatsActionTypes.FETCH_CAUSES_STATS_IMAGES_ERROR,
    payload: { error: error }
  }
};



export const deleteCausesStatsImageRequest = () => {

  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_IMAGE_REQUEST,
    payload: { }
  }
};
export const deleteCausesStatsImageSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteCausesStatsImageError = (error) => {
  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_IMAGE_FAILURE,
    payload: { error: error }
  }
};

export const inActiveCausesStatsImageRequest = () => {

  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_IMAGE_REQUEST,
    payload: { }
  }
};
export const inActiveCausesStatsImageSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_IMAGE_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveCausesStatsImageError = (error) => {
  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_IMAGE_ERROR,
    payload: {  error: error }
  }
};

export const getCausesStatsViewRequest = () => {

  return {
    type: causesStatsActionTypes.GET_CAUSES_STATS_VIEW_REQUEST,
    payload: {  }
  }
};
export const getCausesStatsViewSuccess = (results) => {
  return {
    type: causesStatsActionTypes.GET_CAUSES_STATS_VIEW_SUCCESS,
    payload: { causesStatsViewDetails: { ...results } }

  }
};

export const getCausesStatsViewError = (error) => {
  return {
    type: causesStatsActionTypes.GET_CAUSES_STATS_VIEW_ERROR,
    payload: { loading: false, error: error }
  }
};

export const createCausesStatsViewRequest = () => {
  return {
    type: causesStatsActionTypes.CREATE_CAUSES_STATS_VIEW_REQUEST,
    payload: { }
  }
};
export const createCausesStatsViewSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.CREATE_CAUSES_STATS_VIEW_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const createCausesStatsViewError = (error) => {
  return {
    type: causesStatsActionTypes.CREATE_CAUSES_STATS_VIEW_ERROR,
    payload: {  error: error }
  }
};


export const editCausesStatsViewRequest = () => {

  return {
    type: causesStatsActionTypes.EDIT_CAUSES_STATS_VIEW_REQUEST,
    payload: { }
  }
};
export const editCausesStatsViewSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.EDIT_CAUSES_STATS_VIEW_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const editCausesStatsViewError = (error) => {
  return {
    type: causesStatsActionTypes.EDIT_CAUSES_STATS_VIEW_ERROR,
    payload: { error: error }
  }
};


export const activeCausesStatsViewRequest = () => {

  return {
    type: causesStatsActionTypes.ACTIVE_CAUSES_STATS_VIEW_REQUEST,
    payload: {  }
  }
};
export const activeCausesStatsViewSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.ACTIVE_CAUSES_STATS_VIEW_SUCCESS,
    payload: { uid: uid, }

  }
};

export const activeCausesStatsViewError = (error) => {
  return {
    type: causesStatsActionTypes.ACTIVE_CAUSES_STATS_VIEW_ERROR,
    payload: {  error: error }
  } 
};


export const inActiveCausesStatsViewRequest = () => {

  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_VIEW_REQUEST,
    payload: { }
  }
};
export const inActiveCausesStatsViewSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_VIEW_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const inActiveCausesStatsViewError = (error) => {
  return {
    type: causesStatsActionTypes.INACTIVE_CAUSES_STATS_VIEW_ERROR,
    payload: { onSubmiting: false, error: error }
  }
};


export const deleteCausesStatsViewRequest = () => {

  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_VIEW_REQUEST,
    payload: { }
  }
};
export const deleteCausesStatsViewSuccess = (uid) => {
  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_VIEW_SUCCESS,
    payload: {  uid: uid, }

  }
};

export const deleteCausesStatsViewError = (error) => {
  return {
    type: causesStatsActionTypes.DELETE_CAUSES_STATS_VIEW_ERROR,
    payload: {  error: error }
  }
};

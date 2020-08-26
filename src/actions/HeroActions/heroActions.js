import * as heroActionTypes from '../actionTypes/heroActionTypes';


export const getHeroRequest = () => {

  return {
    type: heroActionTypes.GET_HERO_REQUEST,
    payload: { loading: true }
  }
}
export const getHeroSuccess = (results) => {
  return {
    type: heroActionTypes.GET_HERO_SUCCESS,
    payload: { loading: false, heroDetails: { ...results } }

  }
}

export const getHeroError = (error) => {
  return {
    type: heroActionTypes.GET_HERO_ERROR,
    payload: { loading: false, error: error }
  }
}



export const createHeroRequest = () => {
  return {
    type: heroActionTypes.CREATE_HERO_REQUEST,
    payload: {onSubmiting: true }
  }
}
export const createHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.CREATE_HERO_SUCCESS,
    payload: { onSubmiting: false, uid: uid, }

  }
}

export const createHeroError = (error) => {
  return {
    type: heroActionTypes.CREATE_HERO_ERROR,
    payload: { onSubmiting: false, error: error }
  }
}


export const editHeroRequest = () => {

  return {
    type: heroActionTypes.EDIT_HERO_REQUEST,
    payload: { onSubmiting: true }
  }
}
export const editHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.EDIT_HERO_SUCCESS,
    payload: { onSubmiting: false, uid: uid, }

  }
}

export const editHeroError = (error) => {
  return {
    type: heroActionTypes.EDIT_HERO_ERROR,
    payload: { onSubmiting: false, error: error }
  }
}


export const activeHeroRequest = () => {

  return {
    type: heroActionTypes.ACTIVE_HERO_REQUEST,
    payload: { onSubmiting: true }
  }
}
export const activeHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.ACTIVE_HERO_SUCCESS,
    payload: { onSubmiting: false, uid: uid, }

  }
}

export const activeHeroError = (error) => {
  return {
    type: heroActionTypes.ACTIVE_HERO_ERROR,
    payload: { onSubmiting: false, error: error }
  } 
}


export const inActiveHeroRequest = () => {

  return {
    type: heroActionTypes.INACTIVE_HERO_REQUEST,
    payload: { onSubmiting: true }
  }
}
export const inActiveHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.INACTIVE_HERO_SUCCESS,
    payload: { onSubmiting: false, uid: uid, }

  }
}

export const inActiveHeroError = (error) => {
  return {
    type: heroActionTypes.INACTIVE_HERO_ERROR,
    payload: { onSubmiting: false, error: error }
  }
}


export const deleteHeroRequest = () => {

  return {
    type: heroActionTypes.DELETE_HERO_REQUEST,
    payload: { onSubmiting: true }
  }
}
export const deleteHeroSuccess = (uid) => {
  return {
    type: heroActionTypes.DELETE_HERO_SUCCESS,
    payload: { onSubmiting: false, uid: uid, }

  }
}

export const deleteHeroError = (error) => {
  return {
    type: heroActionTypes.DELETE_HERO_ERROR,
    payload: { onSubmiting: false, error: error }
  }
}
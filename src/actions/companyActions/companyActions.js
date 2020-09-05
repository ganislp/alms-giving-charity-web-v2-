import * as companyActionTypes from '../actionTypes/companyActionTypes'

export const loadCompanyDetailsRequest = () => {

  return {
    type: companyActionTypes.GET_COMPANY_DETAILS_REQUEST,
    payload: {  }
  }
}
export const loadCompanyDetailsSuccess = (results) => {
  return {
    type: companyActionTypes.GET_COMPANY_DETAILS_SUCCESS,
    payload: {  companyDetails: { ...results } }

  }
}

export const loadCompanyDetailsError = (error) => {
  return {
    type: companyActionTypes.GET_COMPANY_DETAILS_ERROR,
    payload: {  error: error }
  }
}


export const createCompanyDetailsRequest = () => {
  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_REQUEST,
    payload: {  }
  }
}
export const createCompanyDetailsSuccess = (uid) => {
  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_SUCCESS,
    payload: {  uid: uid, }

  }
}

export const createCompanyDetailsError = (error) => {
  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_ERROR,
    payload: {  error: error }
  }
}
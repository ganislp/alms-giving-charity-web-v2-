import * as companyActionTypes from '../actions/actionTypes/companyActionTypes'

export const loadCompanyDetailsRequest = () => {

  return {
    type: companyActionTypes.GET_COMPANY_DETAILS_REQUEST,
    payload: { loading: true }
  }
}
export const loadCompanyDetailsSuccess = (results) => {
  return {
    type: companyActionTypes.GET_COMPANY_DETAILS_SUCCESS,
    payload: { loading: false, companyDetails: { ...results } }

  }
}

export const loadCompanyDetailsError = (error) => {
  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_ERROR,
    payload: { loading: false, error: error }
  }
}


export const createCompanyDetailsRequest = () => {

  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_REQUEST,
    payload: { onSubmiting: true }
  }
}
export const createCompanyDetailsSuccess = (uid) => {
  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_SUCCESS,
    payload: { onSubmiting: false, uid: uid, }

  }
}

export const createCompanyDetailsError = (error) => {
  return {
    type: companyActionTypes.CREATE_COMPANY_DETAILS_ERROR,
    payload: { onSubmiting: false, error: error }
  }
}
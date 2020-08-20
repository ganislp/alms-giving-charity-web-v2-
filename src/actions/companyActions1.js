// import {CREATE_COMPANY_DETAILS} from './actionTypes'
// import { db,createdAt } from '../firebase';
// // import moment from 'moment';

// export const createCompanyDetails =  formValues => async (dispatch, getState) => {
//   try {
//  await  db.collection('companyDetails').add({ ...formValues, createdAt: createdAt, });
//   // dispatch({ type:CREATE_COMPANY_DETAILS , payload: response.id });
//   // console.log("response.id",response.id)
// } catch (error) {
//   throw error
// }
// }

// export const fetchCompanyDetails= () => async dispatch => {
//   try {
//   await db.collection('companyDetails').onSnapshot(snap => {
//     const data = snap.docs.map(doc => (
//       {
//         ...doc.data(),
//         createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL')
//       }
//     ));
//     dispatch({ type:FETCH_COMPANY_DETAILS , payload: data });
//   });
// } catch (error) {
//   throw error
// }
// }
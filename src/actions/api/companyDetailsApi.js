import { db,createdAt } from '../../firebase';
import moment from 'moment';
import * as companyActionType  from '../companyActions';
import {showFaildSnackbar,showSuccessSnackbar} from '../snackbarActions'



export const fetchCompanyDetails= () => async dispatch => {
 
  dispatch(companyActionType.loadCompanyDetailsRequest());
  try {
   await db.collection('companyDetails').onSnapshot(snap => {
    const data = snap.docs.map(doc => ( 
      {
        ...doc.data(),
        createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
        uid: doc.id,
      }
    ));
    dispatch(companyActionType.loadCompanyDetailsSuccess(data));
  });
} catch (error) {
  dispatch(companyActionType.loadCompanyDetailsError(error));
}

}

export const createCompanyDetails =  (formValues,uid) => async (dispatch) => {
  dispatch(companyActionType.createCompanyDetailsRequest());
  try {
     if(uid){
    await  db.collection('companyDetails').doc(`${uid}`)
       .update({ ...formValues, createdAt: createdAt,uid:uid });
       dispatch(companyActionType.createCompanyDetailsSuccess(uid)); 
       dispatch(showSuccessSnackbar("Data Updated sucessfully!")); 
     }
     else{
     const response = await  db.collection('companyDetails').add({ ...formValues, createdAt: createdAt, });
     dispatch(companyActionType.createCompanyDetailsSuccess(response.id));
     dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
     }
    
} catch (error) {
  dispatch(companyActionType.createCompanyDetailsError(error));
  console.log('error', error)
  dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
}
}
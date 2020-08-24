import { db,createdAt } from '../../firebase';
import moment from 'moment';
import * as companyActions  from '../companyActions/companyActions';
import {showFaildSnackbar,showSuccessSnackbar} from '../../actions/uiActions/snackbarActions';




export const fetchCompanyDetails= () => async dispatch => {
  dispatch(companyActions.loadCompanyDetailsRequest());
  try {
   await db.collection('companyDetails').onSnapshot(snap => {
    const data = snap.docs.map(doc => ( 
      {
        ...doc.data(),
        createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
        uid: doc.id,
      }
    ));
    dispatch(companyActions.loadCompanyDetailsSuccess(data));
  });
} catch (error) {
  dispatch(companyActions.loadCompanyDetailsError(error));
}

}

export const createCompanyDetails =  (formValues,uid) => async (dispatch) => {
  dispatch(companyActions.createCompanyDetailsRequest());
  try {
     if(uid){
    await  db.collection('companyDetails').doc(`${uid}`)
       .update({ ...formValues, createdAt: createdAt,uid:uid } );
       dispatch(companyActions.createCompanyDetailsSuccess(uid)); 
       dispatch(showSuccessSnackbar("Data Updated sucessfully!")); 
     }
     else{
     const response = await  db.collection('companyDetails').add({ ...formValues, createdAt: createdAt, }, );
     dispatch(companyActions.createCompanyDetailsSuccess(response.id));
     dispatch(showSuccessSnackbar("Data Saved Sucessfully!")); 
     }
 
} catch (error) {
  dispatch(companyActions.createCompanyDetailsError(error));
  dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
}
}
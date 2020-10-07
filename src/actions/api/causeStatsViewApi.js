import { db, createdAt } from '../../firebase';
import moment from 'moment';
import * as causesStatsViewActions from '../CauseStatsActions/CausesStatsActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from './authApi';

const userUid = cookies.get('userUid');
export const getCausesStatsView = () => async dispatch => {
  dispatch(causesStatsViewActions.getCausesStatsViewRequest());
  try {
    await db.collection('causesStatsViewSection').onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      console.log("doc.data()",data)
      if (data.length === 0) {
      //  history.push('/causesStatsView/causesStatsViewCreate');
      }
      dispatch(causesStatsViewActions.getCausesStatsViewSuccess(data));

    });
  } catch (error) {
    dispatch(causesStatsViewActions.getCausesStatsViewError(error));
  }
};

export const createCausesStatsView = (formValues) => async (dispatch) => {
  dispatch(causesStatsViewActions.createCausesStatsViewRequest());
  try {
    let causesStatsViewRef = await db.collection("causesStatsViewSection");
    let imageExist = await causesStatsViewRef.get().then(snap => snap.size)
    let active = false;
    if (imageExist <= 2) {
      active = true;
    }
    const response = causesStatsViewRef.add({ ...formValues,
       createdAt: createdAt, active: active,stats:Number(formValues.stats) },);
    dispatch(causesStatsViewActions.createCausesStatsViewSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/causesStats/causesStatsSettings');
  } catch (error) {
    dispatch(causesStatsViewActions.createCausesStatsViewError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
    console.log("test",error)
  }
};


export const EditCausesStatsView = (uid, formValues) => async dispatch => {
  dispatch(causesStatsViewActions.editCausesStatsViewRequest());
  try {
    await db.collection('causesStatsViewSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt, });
    dispatch(causesStatsViewActions.editCausesStatsViewSuccess(uid));
    dispatch(showSuccessSnackbar("CausesStatsView Section Sucessfully Updated!"));
    history.push('/causesStats/causesStatsSettings');
  } catch (error) {
    dispatch(causesStatsViewActions.editCausesStatsViewError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateCausesStatsViewActive = (uid) => async dispatch => {
  dispatch(causesStatsViewActions.activeCausesStatsViewRequest());
  try {
    let causesStatsViewSectionRef = await db.collection("causesStatsViewSection");
    let inActiveId = await causesStatsViewSectionRef.where("active", "==", true).orderBy("createdAt").limit(1)
    .get().then(snap => snap.docs.map(doc => doc.id));

    if (inActiveId !== null) {
      await causesStatsViewSectionRef.doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(causesStatsViewActions.inActiveCausesStatsViewSuccess(uid));
    }
    else {
      dispatch(causesStatsViewActions.inActiveCausesStatsViewSuccess(uid));     
    }
    await causesStatsViewSectionRef.doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(causesStatsViewActions.activeCausesStatsViewSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(causesStatsViewActions.activeCausesStatsViewError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateCausesStatsViewInActive = (uid) => async dispatch => {
  dispatch(causesStatsViewActions.inActiveCausesStatsViewRequest());
  try {
    await db.collection('causesStatsViewSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(causesStatsViewActions.inActiveCausesStatsViewSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(causesStatsViewActions.inActiveCausesStatsViewError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteCausesStatsView = (uid) => async dispatch => {
  dispatch(causesStatsViewActions.deleteCausesStatsViewRequest());
  try {
    await db.collection('causesStatsViewSection').doc(`${uid}`).delete();
    dispatch(causesStatsViewActions.deleteCausesStatsViewSuccess(uid));
    dispatch(showSuccessSnackbar("CausesStatsView Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(causesStatsViewActions.deleteCausesStatsViewError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const uploadCausesStatsViewFailed = () => dispatch => {
  dispatch(showFaildSnackbar("Image Uplaod Failed! some thing went wrong!"));
};




import { db,createdAt } from '../../firebase';
import moment from 'moment';
import * as heroActions from '../HeroActions/heroActions';
import {showFaildSnackbar,showSuccessSnackbar} from '../uiActions/snackbarActions';
import history from '../../history';


export const getHero = () => async dispatch => {
  dispatch(heroActions.getHeroRequest());
  try{
  await db.collection('heroSection').onSnapshot(snap => {
    const data = snap.docs.map(doc => (
      {
        ...doc.data(),
        createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
        uid: doc.id,
        //userId:userUid
      }
    ));
    if(data.length === 0){
      history.push('/hero/heroCreate');
    }
    dispatch(heroActions.getHeroSuccess(data));
   
  });
} catch (error) {
  dispatch(heroActions.getHeroError(error));
}
};

export const createHero =  (formValues,isActive) => async (dispatch) => {
 dispatch(heroActions.createHeroRequest());
  try {  
     const response = await  db.collection('heroSection').add({ ...formValues, createdAt: createdAt,active: isActive }, );
     dispatch(heroActions.createHeroSuccess(response.id));
      dispatch(showSuccessSnackbar("Data Saved Sucessfully!")); 
     history.push('/hero/heroList');
} catch (error) {
  dispatch(heroActions.createHeroError(error));
  dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
}
};


export const EditHero = (uid,formValues) => async dispatch => {
  dispatch(heroActions.editHeroRequest());
  try { 
  await db.collection('heroSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
  dispatch(heroActions.editHeroSuccess(uid));
 dispatch(showSuccessSnackbar("Hero Section Sucessfully Updated!")); 
  history.push('/hero/heroList');
   } catch (error) {
    dispatch(heroActions.editHeroError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateActive = (uid) => async dispatch => {
  dispatch(heroActions.activeHeroRequest());
  try { 
  await db.collection('heroSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
  dispatch(heroActions.activeHeroSuccess(uid));
  dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!")); 
   } catch (error) {
    dispatch(heroActions.activeHeroError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateInActive = (uid) => async dispatch => {
  dispatch(heroActions.inActiveHeroRequest());
  try { 
  await db.collection('heroSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
  dispatch(heroActions.inActiveHeroSuccess(uid));
 //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
   } catch (error) {
    dispatch(heroActions.inActiveHeroError(error));
  dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteHero = (uid) => async dispatch => {
  dispatch(heroActions.deleteHeroRequest());
  try { 
  await db.collection('heroSection').doc(`${uid}`).delete();
  dispatch(heroActions.deleteHeroSuccess(uid));
 dispatch(showSuccessSnackbar("Hero Section deleted Sucessfully!")); 
   } catch (error) {
    dispatch(heroActions.deleteHeroError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
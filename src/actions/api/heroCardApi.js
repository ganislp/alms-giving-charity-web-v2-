import { db, createdAt } from '../../firebase';
import moment from 'moment';
import * as heroCardActions from '../HeroCardActions/heroCardActions';
import { showFaildSnackbar, showSuccessSnackbar, } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');


export const getHeroCards = () => async dispatch => {
  dispatch(heroCardActions.getHeroCardRequest());
  try {
    await db.collection('heroCardSection').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
        history.push('/heroCard/heroCardCreate');
      }
      dispatch(heroCardActions.getHeroCardSuccess(data));

    });
  } catch (error) {
    dispatch(heroCardActions.getHeroCardError(error));
  }
};

export const createCardHero = (formValues, isActive) => async (dispatch) => {
  dispatch(heroCardActions.createHeroCardRequest());
  try {
    let cardHeroRef = await db.collection("heroCardSection");
    let cardCount = await cardHeroRef.get().then(snap => snap.size);
    let active = false;
    if (cardCount <= 2) {
      active = true;
    }
    const response = cardHeroRef.add({ ...formValues, createdAt: createdAt, active: active },);
    dispatch(heroCardActions.createHeroCardSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/heroCard/heroCardSettings');
  } catch (error) {
    dispatch(heroCardActions.createHeroCardError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditHeroCard = (uid, formValues) => async dispatch => {
  dispatch(heroCardActions.editHeroCardRequest());
  try {
    await db.collection('heroCardSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(heroCardActions.editHeroCardSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Section Card Sucessfully Updated!"));
    history.push('/heroCard/heroCardSettings');
  } catch (error) {
    dispatch(heroCardActions.editHeroCardError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};



export const updateHeroCardActive = (uid) => async dispatch => {
  dispatch(heroCardActions.activeHeroCardRequest());
  try {
    await db.collection('heroCardSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(heroCardActions.activeHeroCardSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    dispatch(heroCardActions.activeHeroCardError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateHeroCardInActive = (uid) => async dispatch => {
  dispatch(heroCardActions.inActiveHeroCardRequest());
  try {
    await db.collection('heroCardSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(heroCardActions.inActiveHeroCardSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(heroCardActions.inActiveHeroCardError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteHeroCard = (uid) => async dispatch => {
  dispatch(heroCardActions.deleteHeroCardRequest());
  try {
    await db.collection('heroCardSection').doc(`${uid}`).delete();
    dispatch(heroCardActions.deleteHeroCardSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Card Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(heroCardActions.deleteHeroCardError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

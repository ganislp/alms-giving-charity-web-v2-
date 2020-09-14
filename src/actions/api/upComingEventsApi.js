import { db, createdAt } from '../../firebase';
import {storage} from '../../firebase';
import moment from 'moment';
import * as heroUpComingEventsActions from '../HeroUpComingEventsActions/heroUpComingEventsActions';
import { showFaildSnackbar, showSuccessSnackbar,showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');


export const getHeroUpComingEvents = () => async dispatch => {
  dispatch(heroUpComingEventsActions.getHeroUpComingEventsRequest());
  try {
    await db.collection('heroUpComingEventsSection').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
        history.push('/heroUpComingEvents/heroUpComingEventsCreate');
      }
      dispatch(heroUpComingEventsActions.getHeroUpComingEventsSuccess(data));

    });
  } catch (error) {
    dispatch(heroUpComingEventsActions.getHeroUpComingEventsError(error));
  }
};

export const createCardHero = (formValues, isActive) => async (dispatch) => {
  dispatch(heroUpComingEventsActions.createHeroUpComingEventsRequest());
  try {
      let cardHeroImageRef = await db.collection("heroUpComingEventsImages");
    let imagesRefuid = await cardHeroImageRef.where("fileName", "==", `${formValues.fileName}`).get()
    .then(snap => snap.docs.map(doc => doc.id));  
    let cardHeroRef = await db.collection("heroUpComingEventsSection");
    let cardCount = await cardHeroRef.get().then(snap => snap.size);
    let active = false;
    if (cardCount <= 2) {
      active = true;
    }
    const response = cardHeroRef.add({ ...formValues, createdAt: createdAt, active: active },);
    cardHeroImageRef.doc(`${imagesRefuid}`).update({ active: active, createdAt: createdAt });
   dispatch(heroUpComingEventsActions.createHeroUpComingEventsSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
   history.push('/heroUpComingEvents/heroUpComingEventsSettings');
  } catch (error) {
    dispatch(heroUpComingEventsActions.createHeroUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditHeroUpComingEvents = (uid, formValues) => async dispatch => {
  dispatch(heroUpComingEventsActions.editHeroUpComingEventsRequest());
  try {      
      await db.collection('heroUpComingEventsSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(heroUpComingEventsActions.editHeroUpComingEventsSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Section Card Sucessfully Updated!"));
    history.push('/heroUpComingEvents/heroUpComingEventsSettings');
  } catch (error) {
    dispatch(heroUpComingEventsActions.editHeroUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};



export const updateHeroUpComingEventsActive = (uid) => async dispatch => {
  dispatch(heroUpComingEventsActions.activeHeroUpComingEventsRequest());
  try {
    await db.collection('heroUpComingEventsSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(heroUpComingEventsActions.activeHeroUpComingEventsSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    dispatch(heroUpComingEventsActions.activeHeroUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateHeroUpComingEventsInActive = () => async dispatch => {
  dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsRequest());
  try {
    let imagesRef = await db.collection("heroUpComingEventsSection");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
    .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('heroUpComingEventsSection').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    console.log("error",error)
    dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteHeroUpComingEvents = (uid) => async dispatch => {
  dispatch(heroUpComingEventsActions.deleteHeroUpComingEventsRequest());
  try {

    await db.collection('heroUpComingEventsSection').doc(`${uid}`).delete();
    dispatch(heroUpComingEventsActions.deleteHeroUpComingEventsSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Card Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(heroUpComingEventsActions.deleteHeroUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};




export const uploadHeroUpComingEventsImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(heroUpComingEventsActions.uploadHeroUpComingEventsImagesRequest());
  try {
    let imagesRef = await db.collection("heroUpComingEventsImages");
    let active = false;
    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {     
      await db.collection('heroUpComingEventsImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(heroUpComingEventsActions.uploadHeroUpComingEventsImagesSuccess());
    }
    else {
      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(heroUpComingEventsActions.uploadHeroUpComingEventsImagesSuccess());
    }

  } catch (error) {
    dispatch(heroUpComingEventsActions.uploadHeroUpComingEventsImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};


export const getHeroUpComingEventsImages = () => async dispatch => {
  dispatch(heroUpComingEventsActions.getHeroUpComingEventsImagesRequest());
  try {

    await db.collection('heroUpComingEventsImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(heroUpComingEventsActions.getHeroUpComingEventsImagesSuccess(data));
    });
  } catch (error) {
    dispatch(heroUpComingEventsActions.getHeroUpComingEventsImagesError(error));
  }
};


export const deleteHeroUpComingEventsImage = (uid,filename) => async dispatch => {
  dispatch(heroUpComingEventsActions.deleteHeroUpComingEventsImageRequest());
  try {   
    let desertRef = storage.ref(`/heroUpComingEvents/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('heroUpComingEventsImages').doc(`${uid}`).delete();
      dispatch(heroUpComingEventsActions.deleteHeroUpComingEventsImageSuccess(uid));
      dispatch(showSuccessSnackbar("Hero Section Image deleted Sucessfully!"));
    });;  
  } catch (error) {
    dispatch(heroUpComingEventsActions.deleteHeroUpComingEventsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateImageActive = (uid,existingActive) => async dispatch => {

  try {
    dispatch(heroUpComingEventsActions.activeHeroUpComingEventsImageRequest());
    let imagesRef = await db.collection("heroUpComingEventsImages");
    await imagesRef.doc(`${uid}`).update({ active: existingActive, createdAt: createdAt });
    dispatch(heroUpComingEventsActions.activeHeroUpComingEventsImageSuccess(uid));
  } catch (error) {
    dispatch(heroUpComingEventsActions.activeHeroUpComingEventsImageError(uid));
  }
};

export const updateImageInActive = (uid,existingActive) => async dispatch => {

  try {
    dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsImageRequest());
    let imagesRef = await db.collection("heroUpComingEventsImages");
    await imagesRef.doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsImageSuccess(uid));
  } catch (error) {
    dispatch(heroUpComingEventsActions.inActiveHeroUpComingEventsImageError(uid));
  }
};

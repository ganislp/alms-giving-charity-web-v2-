import { db, createdAt } from '../../firebase';
import {storage} from '../../firebase';
import moment from 'moment';
import * as upComingEventsActions from '../UpcomingEvents/upComingEventsActions';
import { showFaildSnackbar, showSuccessSnackbar,showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');


export const getUpComingEvents = () => async dispatch => {
  dispatch(upComingEventsActions.getUpComingEventsRequest());
  try {
    await db.collection('upComingEventsSection').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      // if (data.length === 0) {
      //   history.push('/upComingEvents/upComingEventsCreate');
      // }
      dispatch(upComingEventsActions.getUpComingEventsSuccess(data));

    });
  } catch (error) {
    dispatch(upComingEventsActions.getUpComingEventsError(error));
  }
};

export const CreateUpComingEvents = (formValues, isActive) => async (dispatch) => {
  dispatch(upComingEventsActions.createUpComingEventsRequest());
  try {
      let cardHeroImageRef = await db.collection("upComingEventsImages");
    let imagesRefuid = await cardHeroImageRef.where("fileName", "==", `${formValues.fileName}`).get()
    .then(snap => snap.docs.map(doc => doc.id));  
    let cardHeroRef = await db.collection("upComingEventsSection");
    let cardCount = await cardHeroRef.get().then(snap => snap.size);
    let active = false;
    if (cardCount <= 2) {
      active = true;
    }
    const response = cardHeroRef.add({ ...formValues, createdAt: createdAt, active: active },);
    cardHeroImageRef.doc(`${imagesRefuid}`).update({ active: active, createdAt: createdAt });
   dispatch(upComingEventsActions.createUpComingEventsSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
   history.push('/upComingEvents/upComingEventsSettings');
  } catch (error) {
    dispatch(upComingEventsActions.createUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditUpComingEvents = (uid, formValues) => async dispatch => {
  dispatch(upComingEventsActions.editUpComingEventsRequest());
  try {      
      await db.collection('upComingEventsSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(upComingEventsActions.editUpComingEventsSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Section Card Sucessfully Updated!"));
    history.push('/upComingEvents/upComingEventsSettings');
  } catch (error) {
    dispatch(upComingEventsActions.editUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};



export const updateUpComingEventsActive = (uid) => async dispatch => {
  dispatch(upComingEventsActions.activeUpComingEventsRequest());
  try {
    await db.collection('upComingEventsSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(upComingEventsActions.activeUpComingEventsSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    dispatch(upComingEventsActions.activeUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateUpComingEventsInActive = () => async dispatch => {
  dispatch(upComingEventsActions.inActiveUpComingEventsRequest());
  try {
    let imagesRef = await db.collection("upComingEventsSection");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
    .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('upComingEventsSection').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(upComingEventsActions.inActiveUpComingEventsImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(upComingEventsActions.inActiveUpComingEventsImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    console.log("error",error)
    dispatch(upComingEventsActions.inActiveUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteUpComingEvents = (uid) => async dispatch => {
  dispatch(upComingEventsActions.deleteUpComingEventsRequest());
  try {

    await db.collection('upComingEventsSection').doc(`${uid}`).delete();
    dispatch(upComingEventsActions.deleteUpComingEventsSuccess(uid));
    dispatch(showSuccessSnackbar("Up Coming Event Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(upComingEventsActions.deleteUpComingEventsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};




export const uploadUpComingEventsImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(upComingEventsActions.uploadUpComingEventsImagesRequest());
  try {
    let imagesRef = await db.collection("upComingEventsImages");
    let active = false;
    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {     
      await db.collection('upComingEventsImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(upComingEventsActions.uploadUpComingEventsImagesSuccess());
    }
    else {
      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(upComingEventsActions.uploadUpComingEventsImagesSuccess());
    }

  } catch (error) {
    dispatch(upComingEventsActions.uploadUpComingEventsImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};


export const getUpComingEventsImages = () => async dispatch => {
  dispatch(upComingEventsActions.getUpComingEventsImagesRequest());
  try {

    await db.collection('upComingEventsImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      // if (data.length === 0) {
      //   history.push('/upComingEvents/upComingEventsCreate');
      // }
      dispatch(upComingEventsActions.getUpComingEventsImagesSuccess(data));
    });
  } catch (error) {
    dispatch(upComingEventsActions.getUpComingEventsImagesError(error));
  }
};


export const deleteUpComingEventsImage = (uid,filename) => async dispatch => {
  dispatch(upComingEventsActions.deleteUpComingEventsImageRequest());
  try {   
    let desertRef = storage.ref(`/upComingEvents/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('upComingEventsImages').doc(`${uid}`).delete();
      dispatch(upComingEventsActions.deleteUpComingEventsImageSuccess(uid));
      dispatch(showSuccessSnackbar("Hero Section Image deleted Sucessfully!"));
    });;  
  } catch (error) {
    dispatch(upComingEventsActions.deleteUpComingEventsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateImageActive = (uid,existingActive) => async dispatch => {

  try {
    dispatch(upComingEventsActions.activeUpComingEventsImageRequest());
    let imagesRef = await db.collection("upComingEventsImages");
    await imagesRef.doc(`${uid}`).update({ active: existingActive, createdAt: createdAt });
    dispatch(upComingEventsActions.activeUpComingEventsImageSuccess(uid));
  } catch (error) {
    dispatch(upComingEventsActions.activeUpComingEventsImageError(uid));
  }
};

export const updateImageInActive = (uid,existingActive) => async dispatch => {

  try {
    dispatch(upComingEventsActions.inActiveUpComingEventsImageRequest());
    let imagesRef = await db.collection("upComingEventsImages");
    await imagesRef.doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(upComingEventsActions.inActiveUpComingEventsImageSuccess(uid));
  } catch (error) {
    dispatch(upComingEventsActions.inActiveUpComingEventsImageError(uid));
  }
};

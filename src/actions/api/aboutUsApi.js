import { db, createdAt } from '../../firebase';
import {storage} from '../../firebase';
import moment from 'moment';
import * as aboutUsActions from '../AboutUsActions/aboutUsActions';
import { showFaildSnackbar, showSuccessSnackbar,showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');


export const getAboutUs = () => async dispatch => {
  dispatch(aboutUsActions.getAboutUsRequest());
  try {
    await db.collection('aboutUsSection').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
        history.push('/aboutUs/aboutUsCreate');
      }
      dispatch(aboutUsActions.getAboutUsSuccess(data));

    });
  } catch (error) {
    dispatch(aboutUsActions.getAboutUsError(error));
  }
};

export const createAboutUs = (formValues, isActive) => async (dispatch) => {
  dispatch(aboutUsActions.createAboutUsRequest());
  try {
    let cardHeroRef = await db.collection("aboutUsSection");
    let cardCount = await cardHeroRef.get().then(snap => snap.size);
    let active = false;
    if (cardCount <= 2) {
      active = true;
    }
    const response = cardHeroRef.add({ ...formValues, createdAt: createdAt, active: active },);
    dispatch(aboutUsActions.createAboutUsSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/aboutUs/aboutUsSettings');
  } catch (error) {
    dispatch(aboutUsActions.createAboutUsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditAboutUs = (uid, formValues) => async dispatch => {
  dispatch(aboutUsActions.editAboutUsRequest());
  try {
    await db.collection('aboutUsSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(aboutUsActions.editAboutUsSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Section Card Sucessfully Updated!"));
    history.push('/aboutUs/aboutUsSettings');
  } catch (error) {
    dispatch(aboutUsActions.editAboutUsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};



export const updateAboutUsActive = (uid) => async dispatch => {
  dispatch(aboutUsActions.activeAboutUsRequest());
  try {
    await db.collection('aboutUsSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(aboutUsActions.activeAboutUsSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    dispatch(aboutUsActions.activeAboutUsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateAboutUsInActive = (uid) => async dispatch => {
  dispatch(aboutUsActions.inActiveAboutUsRequest());
  try {
    await db.collection('aboutUsSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(aboutUsActions.inActiveAboutUsSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(aboutUsActions.inActiveAboutUsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteAboutUs = (uid) => async dispatch => {
  dispatch(aboutUsActions.deleteAboutUsRequest());
  try {
    await db.collection('aboutUsSection').doc(`${uid}`).delete();
    dispatch(aboutUsActions.deleteAboutUsSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Card Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(aboutUsActions.deleteAboutUsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};




export const uploadAboutUsImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(aboutUsActions.uploadAboutUsImagesRequest());
  try {

    let imagesRef = await db.collection("aboutUsImages");
    let imageExist = await imagesRef.get().then(snap => snap.size)
    let active = false;

    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {
      if (imageExist <= 2) {
        active = true;
      }
      await db.collection('aboutUsImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(aboutUsActions.uploadAboutUsImagesSuccess());
    }
    else {

      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(aboutUsActions.uploadAboutUsImagesSuccess());
    }

  } catch (error) {
    dispatch(aboutUsActions.uploadAboutUsImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};


export const getAboutUsImages = () => async dispatch => {
  dispatch(aboutUsActions.getAboutUsImagesRequest());
  try {

    await db.collection('aboutUsImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(aboutUsActions.getAboutUsImagesSuccess(data));
    });
  } catch (error) {
    dispatch(aboutUsActions.getAboutUsImagesError(error));
  }
};


export const deleteAboutUsImage = (uid,filename) => async dispatch => {
  dispatch(aboutUsActions.deleteAboutUsImageRequest());
  try {
    let desertRef = storage.ref(`/aboutUs/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('aboutUsImages').doc(`${uid}`).delete();
      dispatch(aboutUsActions.deleteAboutUsImageSuccess(uid));
      dispatch(showSuccessSnackbar("Hero Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(aboutUsActions.deleteAboutUsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

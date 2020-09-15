import { db, createdAt } from '../../firebase';
import moment from 'moment';
import {storage} from '../../firebase';
import * as featuredCauseActions from '../FeaturedCauseActions/featuredCauseActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');
export const getFeaturedCause = () => async dispatch => {
  dispatch(featuredCauseActions.getFeaturedCauseRequest());
  try {
    await db.collection('featuredCauseSection').onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
        history.push('/featuredCause/featuredCauseCreate');
      }
      dispatch(featuredCauseActions.getFeaturedCauseSuccess(data));

    });
  } catch (error) {
    dispatch(featuredCauseActions.getFeaturedCauseError(error));
  }
};

export const createFeaturedCause = (formValues, isActive) => async (dispatch) => {
  dispatch(featuredCauseActions.createFeaturedCauseRequest());
  try {
    const response = await db.collection('featuredCauseSection').add({ ...formValues, createdAt: createdAt, active: isActive },);
    dispatch(featuredCauseActions.createFeaturedCauseSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/featuredCause/featuredCauseSettings');
  } catch (error) {
    dispatch(featuredCauseActions.createFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditFeaturedCause = (uid, formValues) => async dispatch => {
  dispatch(featuredCauseActions.editFeaturedCauseRequest());
  try {
    await db.collection('featuredCauseSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(featuredCauseActions.editFeaturedCauseSuccess(uid));
    dispatch(showSuccessSnackbar("FeaturedCause Section Sucessfully Updated!"));
    history.push('/featuredCause/featuredCauseSettings');
  } catch (error) {
    dispatch(featuredCauseActions.editFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateActive = (uid) => async dispatch => {
  dispatch(featuredCauseActions.activeFeaturedCauseRequest());
  try {
    await db.collection('featuredCauseSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(featuredCauseActions.activeFeaturedCauseSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    dispatch(featuredCauseActions.activeFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateInActive = (uid) => async dispatch => {
  dispatch(featuredCauseActions.inActiveFeaturedCauseRequest());
  try {
    await db.collection('featuredCauseSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(featuredCauseActions.inActiveFeaturedCauseSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(featuredCauseActions.inActiveFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteFeaturedCause = (uid) => async dispatch => {
  dispatch(featuredCauseActions.deleteFeaturedCauseRequest());
  try {
    await db.collection('featuredCauseSection').doc(`${uid}`).delete();
    dispatch(featuredCauseActions.deleteFeaturedCauseSuccess(uid));
    dispatch(showSuccessSnackbar("FeaturedCause Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(featuredCauseActions.deleteFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const uploadFeaturedCauseFailed = () => dispatch => {
  dispatch(showFaildSnackbar("Image Uplaod Failed! some thing went wrong!"));
};



export const uploadFeaturedCauseImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(featuredCauseActions.uploadFeaturedCauseImagesRequest());
  try {

    let imagesRef = await db.collection("featuredCauseImages");
    let imageExist = await imagesRef.get().then(snap => snap.size)
    let active = false;

    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {
      if (imageExist <= 2) {
        active = true;
      }
      await db.collection('featuredCauseImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(featuredCauseActions.uploadFeaturedCauseImagesSuccess());
    }
    else {

      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(featuredCauseActions.uploadFeaturedCauseImagesSuccess());
    }

  } catch (error) {
    dispatch(featuredCauseActions.uploadFeaturedCauseImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};

export const getFeaturedCauseImages = () => async dispatch => {
  dispatch(featuredCauseActions.getFeaturedCauseImagesRequest());
  try {

    await db.collection('featuredCauseImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(featuredCauseActions.getFeaturedCauseImagesSuccess(data));

    });
  } catch (error) {
    dispatch(featuredCauseActions.getFeaturedCauseImagesError(error));
  }
};

export const getFeaturedCauseImageByImageName = (imageName) => async dispatch => {
  dispatch(featuredCauseActions.getFeaturedCauseImagesRequest());
  try {
    await (await db.collection('featuredCauseImages').where('fileName', '==', imageName).get()).empty
  } catch (error) {
    dispatch(featuredCauseActions.getFeaturedCauseImagesError(error));
  }
};

export const deleteFeaturedCauseImage = (uid,filename) => async dispatch => {
  dispatch(featuredCauseActions.deleteFeaturedCauseImageRequest());
  try {
    let desertRef = storage.ref(`featuredCause/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('featuredCauseImages').doc(`${uid}`).delete();
      dispatch(featuredCauseActions.deleteFeaturedCauseImageSuccess(uid));
      dispatch(showSuccessSnackbar("FeaturedCause Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(featuredCauseActions.deleteFeaturedCauseImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageActive = (uid) => async dispatch => {

  try {
    await db.collection('featuredCauseImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageInActive = () => async dispatch => {
  try {
    dispatch(featuredCauseActions.inActiveFeaturedCauseImageRequest());
    let imagesRef = await db.collection("featuredCauseImages");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
      .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('featuredCauseImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(featuredCauseActions.inActiveFeaturedCauseImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(featuredCauseActions.inActiveFeaturedCauseImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    dispatch(featuredCauseActions.inActiveFeaturedCauseImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
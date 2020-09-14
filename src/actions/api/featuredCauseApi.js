import { db, createdAt } from '../../firebase';
import moment from 'moment';
import {storage} from '../../firebase';
import * as heroFeaturedCauseActions from '../HeroFeaturedCauseActions/heroFeaturedCauseActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');
export const getHeroFeaturedCause = () => async dispatch => {
  dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseRequest());
  try {
    await db.collection('heroFeaturedCauseSection').onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
        history.push('/heroFeaturedCause/heroFeaturedCauseCreate');
      }
      dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseSuccess(data));

    });
  } catch (error) {
    dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseError(error));
  }
};

export const createHeroFeaturedCause = (formValues, isActive) => async (dispatch) => {
  dispatch(heroFeaturedCauseActions.createHeroFeaturedCauseRequest());
  try {
    const response = await db.collection('heroFeaturedCauseSection').add({ ...formValues, createdAt: createdAt, active: isActive },);
    dispatch(heroFeaturedCauseActions.createHeroFeaturedCauseSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/heroFeaturedCause/heroFeaturedCauseSettings');
  } catch (error) {
    dispatch(heroFeaturedCauseActions.createHeroFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditHeroFeaturedCause = (uid, formValues) => async dispatch => {
  dispatch(heroFeaturedCauseActions.editHeroFeaturedCauseRequest());
  try {
    await db.collection('heroFeaturedCauseSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(heroFeaturedCauseActions.editHeroFeaturedCauseSuccess(uid));
    dispatch(showSuccessSnackbar("HeroFeaturedCause Section Sucessfully Updated!"));
    history.push('/heroFeaturedCause/heroFeaturedCauseSettings');
  } catch (error) {
    dispatch(heroFeaturedCauseActions.editHeroFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateActive = (uid) => async dispatch => {
  dispatch(heroFeaturedCauseActions.activeHeroFeaturedCauseRequest());
  try {
    await db.collection('heroFeaturedCauseSection').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(heroFeaturedCauseActions.activeHeroFeaturedCauseSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    dispatch(heroFeaturedCauseActions.activeHeroFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateInActive = (uid) => async dispatch => {
  dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseRequest());
  try {
    await db.collection('heroFeaturedCauseSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteHeroFeaturedCause = (uid) => async dispatch => {
  dispatch(heroFeaturedCauseActions.deleteHeroFeaturedCauseRequest());
  try {
    await db.collection('heroFeaturedCauseSection').doc(`${uid}`).delete();
    dispatch(heroFeaturedCauseActions.deleteHeroFeaturedCauseSuccess(uid));
    dispatch(showSuccessSnackbar("HeroFeaturedCause Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(heroFeaturedCauseActions.deleteHeroFeaturedCauseError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const uploadHeroFeaturedCauseFailed = () => dispatch => {
  dispatch(showFaildSnackbar("Image Uplaod Failed! some thing went wrong!"));
};



export const uploadHeroFeaturedCauseImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(heroFeaturedCauseActions.uploadHeroFeaturedCauseImagesRequest());
  try {

    let imagesRef = await db.collection("heroFeaturedCauseImages");
    let imageExist = await imagesRef.get().then(snap => snap.size)
    let active = false;

    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {
      if (imageExist <= 2) {
        active = true;
      }
      await db.collection('heroFeaturedCauseImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(heroFeaturedCauseActions.uploadHeroFeaturedCauseImagesSuccess());
    }
    else {

      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(heroFeaturedCauseActions.uploadHeroFeaturedCauseImagesSuccess());
    }

  } catch (error) {
    dispatch(heroFeaturedCauseActions.uploadHeroFeaturedCauseImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};

export const getHeroFeaturedCauseImages = () => async dispatch => {
  dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseImagesRequest());
  try {

    await db.collection('heroFeaturedCauseImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseImagesSuccess(data));

    });
  } catch (error) {
    dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseImagesError(error));
  }
};

export const getHeroFeaturedCauseImageByImageName = (imageName) => async dispatch => {
  dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseImagesRequest());
  try {
    await (await db.collection('heroFeaturedCauseImages').where('fileName', '==', imageName).get()).empty
  } catch (error) {
    dispatch(heroFeaturedCauseActions.getHeroFeaturedCauseImagesError(error));
  }
};

export const deleteHeroFeaturedCauseImage = (uid,filename) => async dispatch => {
  dispatch(heroFeaturedCauseActions.deleteHeroFeaturedCauseImageRequest());
  try {
    let desertRef = storage.ref(`heroFeaturedCause/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('heroFeaturedCauseImages').doc(`${uid}`).delete();
      dispatch(heroFeaturedCauseActions.deleteHeroFeaturedCauseImageSuccess(uid));
      dispatch(showSuccessSnackbar("HeroFeaturedCause Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(heroFeaturedCauseActions.deleteHeroFeaturedCauseImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageActive = (uid) => async dispatch => {

  try {
    await db.collection('heroFeaturedCauseImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageInActive = () => async dispatch => {
  try {
    dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseImageRequest());
    let imagesRef = await db.collection("heroFeaturedCauseImages");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
      .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('heroFeaturedCauseImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    dispatch(heroFeaturedCauseActions.inActiveHeroFeaturedCauseImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
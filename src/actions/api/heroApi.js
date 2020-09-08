import { db, createdAt } from '../../firebase';
import moment from 'moment';
import {storage} from '../../firebase';
import * as heroActions from '../HeroActions/heroActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');
export const getHero = () => async dispatch => {
  dispatch(heroActions.getHeroRequest());
  try {
    await db.collection('heroSection').onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
        history.push('/hero/heroCreate');
      }
      dispatch(heroActions.getHeroSuccess(data));

    });
  } catch (error) {
    dispatch(heroActions.getHeroError(error));
  }
};

export const createHero = (formValues, isActive) => async (dispatch) => {
  dispatch(heroActions.createHeroRequest());
  try {
    const response = await db.collection('heroSection').add({ ...formValues, createdAt: createdAt, active: isActive },);
    dispatch(heroActions.createHeroSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/hero/heroSettings');
  } catch (error) {
    dispatch(heroActions.createHeroError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditHero = (uid, formValues) => async dispatch => {
  dispatch(heroActions.editHeroRequest());
  try {
    await db.collection('heroSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt });
    dispatch(heroActions.editHeroSuccess(uid));
    dispatch(showSuccessSnackbar("Hero Section Sucessfully Updated!"));
    history.push('/hero/heroSettings');
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

export const uploadHeroFailed = () => dispatch => {
  dispatch(showFaildSnackbar("Image Uplaod Failed! some thing went wrong!"));
};



export const uploadHeroImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(heroActions.uploadHeroImagesRequest());
  try {

    let imagesRef = await db.collection("heroImages");
    let imageExist = await imagesRef.get().then(snap => snap.size)
    let active = false;

    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {
      if (imageExist <= 2) {
        active = true;
      }
      await db.collection('heroImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(heroActions.uploadHeroImagesSuccess());
    }
    else {

      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(heroActions.uploadHeroImagesSuccess());
    }

  } catch (error) {
    dispatch(heroActions.uploadHeroImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};

export const getHeroImages = () => async dispatch => {
  dispatch(heroActions.getHeroImagesRequest());
  try {

    await db.collection('heroImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(heroActions.getHeroImagesSuccess(data));

    });
  } catch (error) {
    dispatch(heroActions.getHeroImagesError(error));
  }
};

export const getHeroImageByImageName = (imageName) => async dispatch => {
  dispatch(heroActions.getHeroImagesRequest());
  try {
    await (await db.collection('heroImages').where('fileName', '==', imageName).get()).empty
  } catch (error) {
    dispatch(heroActions.getHeroImagesError(error));
  }
};

export const deleteHeroImage = (uid,filename) => async dispatch => {
  dispatch(heroActions.deleteHeroImageRequest());
  try {
    let desertRef = storage.ref(`hero/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('heroImages').doc(`${uid}`).delete();
      dispatch(heroActions.deleteHeroImageSuccess(uid));
      dispatch(showSuccessSnackbar("Hero Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(heroActions.deleteHeroImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageActive = (uid) => async dispatch => {

  try {
    await db.collection('heroImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageInActive = () => async dispatch => {
  try {
    dispatch(heroActions.inActiveHeroImageRequest());
    let imagesRef = await db.collection("heroImages");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
      .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('heroImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(heroActions.inActiveHeroImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(heroActions.inActiveHeroImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    dispatch(heroActions.inActiveHeroImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
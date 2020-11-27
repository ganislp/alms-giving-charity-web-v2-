import { db, createdAt } from '../../firebase';
import moment from 'moment';
import {storage} from '../../firebase';
import * as footerActions from '../FooterActions/footerActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

export const uploadFooterImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(footerActions.uploadFooterBgImagesRequest());
  try {

    let imagesRef = await db.collection("footerImages");
    let imageExist = await imagesRef.get().then(snap => snap.size)
    let active = false;

    let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`).get().then(snap => snap.size);
    if (fileNameLength === 0) {
      if (imageExist <= 0) {
        active = true;
      }
      await db.collection('footerImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
      //userId: userUid
      dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
      dispatch(footerActions.uploadFooterBgImagesSuccess());
    }
    else {

      dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
      dispatch(footerActions.uploadFooterBgImagesSuccess());
    }

  } catch (error) {
    dispatch(footerActions.uploadFooterBgImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};

export const getFooterBgImages = () => async dispatch => {
  dispatch(footerActions.getFooterBgImagesRequest());
  try {

    await db.collection('footerImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(footerActions.getFooterBgImagesSuccess(data));

    });
  } catch (error) {
    dispatch(footerActions.getFooterBgImagesError(error));
  }
};


export const deleteFooterImage = (uid,filename) => async dispatch => {
  dispatch(footerActions.deleteFooterBgImageRequest());
  try {
    let desertRef = storage.ref(`footerImages/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('footerImages').doc(`${uid}`).delete();
      dispatch(footerActions.deleteFooterBgImageSuccess(uid));
      dispatch(showSuccessSnackbar("footerImages Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(footerActions.deleteFooterBgImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateFooterImageInActive = (uid) => async dispatch => {
  try {
    dispatch(footerActions.inActiveFooterBgImageRequest());
    let imagesRef = await db.collection("footerImages");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
      .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('footerImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(footerActions.inActiveFooterBgImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(footerActions.inActiveFooterBgImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
    await imagesRef.doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(footerActions.activeFooterBgSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
    
  } catch (error) {
    dispatch(footerActions.inActiveFooterBgImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
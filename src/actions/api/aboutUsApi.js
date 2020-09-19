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
    if (cardCount <= 0) {
      active = true;
    }
    const response = cardHeroRef.add({ ...formValues, createdAt: createdAt, active: active },);
    dispatch(aboutUsActions.createAboutUsSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/aboutus/aboutUsSectionSettings');
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
    dispatch(showSuccessSnackbar("Hero about us Sucessfully Updated!"));
    history.push('/aboutus/aboutUsSectionSettings');
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
    let active = false;   
if(imagesPayload.backround){
  let imageExistBackround = await imagesRef
  .where("backround", "==", true)
  .get().then(snap => snap.size) ;

  let fileNameLengthBackround = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`)
  .where("backround", "==", true)
  .get().then(snap => snap.size);

  if (fileNameLengthBackround === 0) {
    if (imageExistBackround <= 0) {
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
}
else{
  let imageExist = await imagesRef
  .where("backround", "==", false)
  .get().then(snap => snap.size) ;

  let fileNameLength = await imagesRef.where("fileName", "==", `${imagesPayload.fileName}`)
  .where("backround", "==", false)
  .get().then(snap => snap.size);

  console.log("imageExist",imageExist);
  if (fileNameLength === 0) {
    if (imageExist <= 0) {
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
}


   

  } catch (error) {
    dispatch(aboutUsActions.uploadAboutUsImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};


export const getAboutUsImages = () => async dispatch => {
  dispatch(aboutUsActions.getAboutUsImagesRequest());
  try {

    await db.collection('aboutUsImages').orderBy("backround","desc").onSnapshot(snap => {
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
    let imagesRef = await db.collection("aboutUsSection");
    let fileNameLength = await imagesRef.where("fileName", "==", `${filename}`).where("active", "==", true).get().then(snap => snap.size);
    if(fileNameLength === 0){
    let desertRef = storage.ref(`/aboutUs/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('aboutUsImages').doc(`${uid}`).delete();
      dispatch(aboutUsActions.deleteAboutUsImageSuccess(uid));
      dispatch(showSuccessSnackbar("Hero Section Image deleted Sucessfully!"));
    });
  }else{
    dispatch(aboutUsActions.deleteAboutUsImageSuccess(uid));
    dispatch(showWarningSnackbar("Before Delete please inActive!"));
  }
   
  } catch (error) {
    dispatch(aboutUsActions.deleteAboutUsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageActive = (uid) => async dispatch => {

  try {
    await db.collection('aboutUsImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageInActive = (backround,uid) => async dispatch => {
  try {
    dispatch(aboutUsActions.inActiveAboutUsImageRequest());
    let imagesRef = await db.collection("aboutUsImages");
    let inActiveId = await imagesRef.where("active", "==", true).where("backround", "==", backround)
      .get().then(snap => snap.docs.map(doc => doc.id));
    
      await db.collection('aboutUsImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
      if (inActiveId !== null) {
      await db.collection('aboutUsImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
     
      dispatch(aboutUsActions.inActiveAboutUsImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
     
    }
    else {
      dispatch(aboutUsActions.inActiveAboutUsImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    dispatch(aboutUsActions.inActiveAboutUsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
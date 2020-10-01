import { db, createdAt } from '../../firebase';
import moment from 'moment';
import {storage} from '../../firebase';
import * as causesStatsActions from '../CauseStatsActions/CausesStatsActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from './authApi';

const userUid = cookies.get('userUid');
export const getCausesStats = () => async dispatch => {
  dispatch(causesStatsActions.getCausesStatsRequest());
  try {
    await db.collection('causesStatsSection').onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
      //  history.push('/causesStats/causesStatsCreate');
      }
      dispatch(causesStatsActions.getCausesStatsSuccess(data));

    });
  } catch (error) {
    dispatch(causesStatsActions.getCausesStatsError(error));
  }
};

export const createCausesStats = (formValues,isActive) => async (dispatch) => {
  dispatch(causesStatsActions.createCausesStatsRequest());
  try {
    let causesStatsRef = await db.collection("causesStatsSection");
    const response = causesStatsRef.add({ ...formValues,
       createdAt: createdAt, active: isActive },);
    dispatch(causesStatsActions.createCausesStatsSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
history.push('/causesStats/causesStatsSettings');
  } catch (error) {
    dispatch(causesStatsActions.createCausesStatsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditCausesStats = (uid, formValues) => async dispatch => {
  dispatch(causesStatsActions.editCausesStatsRequest());
  try {
    await db.collection('causesStatsSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt, });
    dispatch(causesStatsActions.editCausesStatsSuccess(uid));
    dispatch(showSuccessSnackbar("CausesStats Section Sucessfully Updated!"));
    history.push('/causesStats/causesStatsSettings');
  } catch (error) {
    dispatch(causesStatsActions.editCausesStatsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateCausesStatsActive = (uid) => async dispatch => {
  dispatch(causesStatsActions.activeCausesStatsRequest());
  try {
    let causesStatsSectionRef = await db.collection("causesStatsSection");
    let inActiveId = await causesStatsSectionRef.where("active", "==", true)
    .get().then(snap => snap.docs.map(doc => doc.id));

    if (inActiveId !== null) {
      await causesStatsSectionRef.doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(causesStatsActions.inActiveCausesStatsSuccess(uid));
    }
    else {
      dispatch(causesStatsActions.inActiveCausesStatsSuccess(uid));     
    }
    await causesStatsSectionRef.doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(causesStatsActions.activeCausesStatsSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(causesStatsActions.activeCausesStatsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateCausesStatsInActive = (uid) => async dispatch => {
  dispatch(causesStatsActions.inActiveCausesStatsRequest());
  try {
    await db.collection('causesStatsSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(causesStatsActions.inActiveCausesStatsSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(causesStatsActions.inActiveCausesStatsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteCausesStats = (uid) => async dispatch => {
  dispatch(causesStatsActions.deleteCausesStatsRequest());
  try {
    await db.collection('causesStatsSection').doc(`${uid}`).delete();
    dispatch(causesStatsActions.deleteCausesStatsSuccess(uid));
    dispatch(showSuccessSnackbar("CausesStats Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(causesStatsActions.deleteCausesStatsError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const uploadCausesStatsFailed = () => dispatch => {
  dispatch(showFaildSnackbar("Image Uplaod Failed! some thing went wrong!"));
};



export const uploadCausesStatsImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(causesStatsActions.uploadCausesStatsImagesRequest());
  try {
    let imagesRef = await db.collection("causesStatsImages");
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
    await db.collection('causesStatsImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
    //userId: userUid
    dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
    dispatch(causesStatsActions.uploadCausesStatsImagesSuccess());
  }
  else {
    dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
    dispatch(causesStatsActions.uploadCausesStatsImagesSuccess());
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
    if (imageExist <= 2) {
      active = true;
    }
    await db.collection('causesStatsImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
    //userId: userUid
    dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
    dispatch(causesStatsActions.uploadCausesStatsImagesSuccess());
  }
  else {
    dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
    dispatch(causesStatsActions.uploadCausesStatsImagesSuccess());
  }
}
  } catch (error) {
    dispatch(causesStatsActions.uploadCausesStatsImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};

export const getCausesStatsImages = () => async dispatch => {
  dispatch(causesStatsActions.getCausesStatsImagesRequest());
  try {

    await db.collection('causesStatsImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(causesStatsActions.getCausesStatsImagesSuccess(data));

    });
  } catch (error) {
    dispatch(causesStatsActions.getCausesStatsImagesError(error));
  }
};

export const getCausesStatsImageByImageName = (imageName) => async dispatch => {
  dispatch(causesStatsActions.getCausesStatsImagesRequest());
  try {
    await (await db.collection('causesStatsImages').where('fileName', '==', imageName).get()).empty
  } catch (error) {
    dispatch(causesStatsActions.getCausesStatsImagesError(error));
  }
};

export const deleteCausesStatsImage = (uid,filename) => async dispatch => {
  dispatch(causesStatsActions.deleteCausesStatsImageRequest());
  try {
    let desertRef = storage.ref(`causesStats/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('causesStatsImages').doc(`${uid}`).delete();
      dispatch(causesStatsActions.deleteCausesStatsImageSuccess(uid));
      dispatch(showSuccessSnackbar("CausesStats Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(causesStatsActions.deleteCausesStatsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageActive = (uid) => async dispatch => {

  try {
    await db.collection('causesStatsImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageInActive = () => async dispatch => {
  try {
    dispatch(causesStatsActions.inActiveCausesStatsImageRequest());
    let imagesRef = await db.collection("causesStatsImages");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
      .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('causesStatsImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(causesStatsActions.inActiveCausesStatsImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(causesStatsActions.inActiveCausesStatsImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    dispatch(causesStatsActions.inActiveCausesStatsImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
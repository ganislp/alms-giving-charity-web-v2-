import { db, createdAt } from '../../firebase';
import moment from 'moment';
import {storage} from '../../firebase';
import * as ourCausesActions from '../OurCausesActions/ourCausesActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');
export const getOurCauses = () => async dispatch => {
  dispatch(ourCausesActions.getOurCausesRequest());
  try {
    await db.collection('ourCausesSection').onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      if (data.length === 0) {
      //  history.push('/ourCauses/ourCausesCreate');
      }
      dispatch(ourCausesActions.getOurCausesSuccess(data));

    });
  } catch (error) {
    dispatch(ourCausesActions.getOurCausesError(error));
  }
};

export const createOurCauses = (formValues) => async (dispatch) => {
  dispatch(ourCausesActions.createOurCausesRequest());
  try {
    let ourCausesRef = await db.collection("ourCausesSection");
    let imageExist = await ourCausesRef.get().then(snap => snap.size)
    let active = false;
    if (imageExist <= 4) {
      active = true;
    }
    const response = ourCausesRef.add({ ...formValues,
       createdAt: createdAt, active: active,foundGoal:Number(formValues.foundGoal),foundRaised:Number(formValues.foundRaised) },);
    dispatch(ourCausesActions.createOurCausesSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/ourCauses/ourCausesSectionSettings');
  } catch (error) {
    dispatch(ourCausesActions.createOurCausesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const EditOurCauses = (uid, formValues) => async dispatch => {
  dispatch(ourCausesActions.editOurCausesRequest());
  try {
    await db.collection('ourCausesSection').doc(`${uid}`).update({ ...formValues, createdAt: createdAt, });
    dispatch(ourCausesActions.editOurCausesSuccess(uid));
    dispatch(showSuccessSnackbar("OurCauses Section Sucessfully Updated!"));
    history.push('/ourCauses/ourCausesSectionSettings');
  } catch (error) {
    dispatch(ourCausesActions.editOurCausesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateOurCausesActive = (uid) => async dispatch => {
  dispatch(ourCausesActions.activeOurCausesRequest());
  try {
    let ourCausesSectionRef = await db.collection("ourCausesSection");
    let inActiveId = await ourCausesSectionRef.where("active", "==", true).orderBy("createdAt").limit(1)
    .get().then(snap => snap.docs.map(doc => doc.id));

    if (inActiveId !== null) {
      await ourCausesSectionRef.doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(ourCausesActions.inActiveOurCausesSuccess(uid));
    }
    else {
      dispatch(ourCausesActions.inActiveOurCausesSuccess(uid));     
    }
    await ourCausesSectionRef.doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(ourCausesActions.activeOurCausesSuccess(uid));
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(ourCausesActions.activeOurCausesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const updateOurCausesInActive = (uid) => async dispatch => {
  dispatch(ourCausesActions.inActiveOurCausesRequest());
  try {
    await db.collection('ourCausesSection').doc(`${uid}`).update({ active: false, createdAt: createdAt });
    dispatch(ourCausesActions.inActiveOurCausesSuccess(uid));
    //dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!")); 
  } catch (error) {
    dispatch(ourCausesActions.inActiveOurCausesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const deleteOurCauses = (uid) => async dispatch => {
  dispatch(ourCausesActions.deleteOurCausesRequest());
  try {
    await db.collection('ourCausesSection').doc(`${uid}`).delete();
    dispatch(ourCausesActions.deleteOurCausesSuccess(uid));
    dispatch(showSuccessSnackbar("OurCauses Section deleted Sucessfully!"));
  } catch (error) {
    dispatch(ourCausesActions.deleteOurCausesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};

export const uploadOurCausesFailed = () => dispatch => {
  dispatch(showFaildSnackbar("Image Uplaod Failed! some thing went wrong!"));
};



export const uploadOurCausesImages = (imagesPayload) => async (dispatch, getState) => {
  dispatch(ourCausesActions.uploadOurCausesImagesRequest());
  try {
    let imagesRef = await db.collection("ourCausesImages");
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
    await db.collection('ourCausesImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
    //userId: userUid
    dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
    dispatch(ourCausesActions.uploadOurCausesImagesSuccess());
  }
  else {
    dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
    dispatch(ourCausesActions.uploadOurCausesImagesSuccess());
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
    await db.collection('ourCausesImages').add({ ...imagesPayload, createdAt: createdAt, active: active,  });
    //userId: userUid
    dispatch(showSuccessSnackbar("Images Uploaded Sucessfully!"));
    dispatch(ourCausesActions.uploadOurCausesImagesSuccess());
  }
  else {
    dispatch(showWarningSnackbar(`This image ${imagesPayload.fileName} already exists`));
    dispatch(ourCausesActions.uploadOurCausesImagesSuccess());
  }
}
  } catch (error) {
    dispatch(ourCausesActions.uploadOurCausesImagesError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));

  }
};

export const getOurCausesImages = () => async dispatch => {
  dispatch(ourCausesActions.getOurCausesImagesRequest());
  try {

    await db.collection('ourCausesImages').orderBy("createdAt","desc").onSnapshot(snap => {
      const data = snap.docs.map(doc => (
        {
          ...doc.data(),
          createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
          uid: doc.id,
          //userId:userUid
        }
      ));
      dispatch(ourCausesActions.getOurCausesImagesSuccess(data));

    });
  } catch (error) {
    dispatch(ourCausesActions.getOurCausesImagesError(error));
  }
};

export const getOurCausesImageByImageName = (imageName) => async dispatch => {
  dispatch(ourCausesActions.getOurCausesImagesRequest());
  try {
    await (await db.collection('ourCausesImages').where('fileName', '==', imageName).get()).empty
  } catch (error) {
    dispatch(ourCausesActions.getOurCausesImagesError(error));
  }
};

export const deleteOurCausesImage = (uid,filename) => async dispatch => {
  dispatch(ourCausesActions.deleteOurCausesImageRequest());
  try {
    let desertRef = storage.ref(`ourCauses/${filename}`)
    await desertRef.delete().then(() => {
       db.collection('ourCausesImages').doc(`${uid}`).delete();
      dispatch(ourCausesActions.deleteOurCausesImageSuccess(uid));
      dispatch(showSuccessSnackbar("OurCauses Section Image deleted Sucessfully!"));
    });;
   
  } catch (error) {
    dispatch(ourCausesActions.deleteOurCausesImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageActive = (uid) => async dispatch => {

  try {
    await db.collection('ourCausesImages').doc(`${uid}`).update({ active: true, createdAt: createdAt });
    dispatch(showSuccessSnackbar("Active Record Sucessfully Updated!"));
  } catch (error) {
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};


export const updateImageInActive = () => async dispatch => {
  try {
    dispatch(ourCausesActions.inActiveOurCausesImageRequest());
    let imagesRef = await db.collection("ourCausesImages");
    let inActiveId = await imagesRef.where("active", "==", true).orderBy("createdAt").limit(1)
      .get().then(snap => snap.docs.map(doc => doc.id));
    if (inActiveId !== null) {
      await db.collection('ourCausesImages').doc(`${inActiveId}`).update({ active: false, createdAt: createdAt });
      dispatch(ourCausesActions.inActiveOurCausesImageSuccess(inActiveId));
      dispatch(showSuccessSnackbar("inActive Record Sucessfully Updated!"));
    }
    else {
      dispatch(ourCausesActions.inActiveOurCausesImageSuccess(inActiveId));
      dispatch(showFaildSnackbar("No Active Record found!"));
    }
  } catch (error) {
    dispatch(ourCausesActions.inActiveOurCausesImageError(error));
    console.log("error",error)
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
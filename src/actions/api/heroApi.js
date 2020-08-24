import { db,createdAt } from '../../firebase';
import moment from 'moment';
import * as heroActions from '../HeroActions/heroActions';
import {showFaildSnackbar,showSuccessSnackbar} from '../uiActions/snackbarActions';

export const getHero = () => async dispatch => {
  dispatch(heroActions.getHeroRequest);
  try{
  await db.collection('heroSection').onSnapshot(snap => {
    const data = snap.docs.map(doc => (
      {
        ...doc.data(),
        createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
        uid: doc.id,
        //userId:userUid
      }
    ));
    dispatch(heroActions.getHeroSuccess(data));
  });
} catch (error) {
  dispatch(heroActions.getHeroError(error));
}
};

export const createHero =  (formValues,uid) => async (dispatch) => {
 dispatch(heroActions.createHeroRequest());
  try {  
     const response = await  db.collection('heroSection').add({ ...formValues, createdAt: createdAt,active: false }, );
     dispatch(heroActions.createHeroSuccess(response.id));
     dispatch(showSuccessSnackbar("Data Saved Sucessfully!")); 
     
} catch (error) {
  dispatch(heroActions.createHeroError(error));
  dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
}
}
import { db, createdAt } from '../../firebase';
import moment from 'moment';
import * as heroCardActions from '../HeroCardActions/heroCardActions';
import { showFaildSnackbar, showSuccessSnackbar, showWarningSnackbar } from '../uiActions/snackbarActions';
import history from '../../history';
import { cookies } from '../api/authApi';

const userUid = cookies.get('userUid');


export const getHeroCards = () => async dispatch => {
  dispatch(heroCardActions.getHeroCardRequest());
  try {
    // await db.collection('heroCardSection').onSnapshot(snap => {
    //   const data = snap.docs.map(doc => (
    //     {
    //       ...doc.data(),
    //       createdAt: moment(new Date(doc.data().createdAt.seconds * 1000 + doc.data().createdAt.nanoseconds / 1000000)).format('LLL'),
    //       uid: doc.id,
    //       //userId:userUid
    //     }
    //   ));
    //   if (data.length === 0) {
    //     history.push('/hero/heroCardCreate');
    //   }
    //   dispatch(heroCardActions.getHeroCardSuccess(data));

    // });
  } catch (error) {
    dispatch(heroCardActions.getHeroCardError(error));
  }
};

export const createCardHero = (formValues, isActive) => async (dispatch) => {
  dispatch(heroCardActions.createHeroCardRequest());
  try {
    const response = await db.collection('heroCardSection').add({ ...formValues, createdAt: createdAt, active: isActive },);
    dispatch(heroCardActions.createHeroCardSuccess(response.id));
    dispatch(showSuccessSnackbar("Data Saved Sucessfully!"));
    history.push('/hero/heroSettings');
  } catch (error) {
    dispatch(heroCardActions.createHeroCardError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
};
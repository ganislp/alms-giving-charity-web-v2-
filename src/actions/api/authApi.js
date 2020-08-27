import {auth } from '../../firebase';
import * as authActions  from '../authActions/authActions';
import { Cookies } from 'react-cookie';
import {showFaildSnackbar} from '../uiActions/snackbarActions';



export const cookies = new Cookies();
export const login = (formValues) => async dispatch => {

  try {
    await auth.signInWithEmailAndPassword(formValues.email, formValues.password)
    dispatch(authActions.loginSuccess(auth.currentUser.toJSON()));
  } catch (error) {
    dispatch(authActions.loginError(error));
    dispatch(showFaildSnackbar("Please Try agin!"));
  }
}

export const register = (formValues) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(formValues.email, formValues.password)
    dispatch(authActions.registerSuccess(auth.currentUser.toJSON()))
  } catch (error) {
    dispatch(authActions.registerError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
}


export const logout = () => async dispatch => {
  try {
    await auth.signOut()
    dispatch(authActions.logOut( auth.currentUser))
  cookies.remove('isAuthenticated', { path: '/' });
    cookies.remove('userUid', { path: '/' });
  } catch (error) {
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
}

export const fetchUser = () => async dispatch => {
  try {
    await auth.onAuthStateChanged(currentUser => {
      if (currentUser) {  
       cookies.set('isAuthenticated', true, { path: '/' });  
       cookies.set('userUid', currentUser.uid, { path: '/' });   
      dispatch(authActions.fetchUser(auth.currentUser.toJSON()));
      } else {
       cookies.set('isAuthenticated', false, { path: '/' });   
     dispatch(authActions.fetchUser(null));
      }
    })
  } catch (error) {
    dispatch(authActions.fetchUserError(error));
    dispatch(showFaildSnackbar("Please Contact Admistator! some thing went wrong!"));
  }
}
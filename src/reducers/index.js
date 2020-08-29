import { combineReducers } from 'redux';

import {
  selectdAppTabReducer,
  drawerOpenReducer,
  confDialogOpenReducer,
popOverDialogOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import heroReducer from './Hero/HeroReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import pendingReducer from './pendingReducer'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  selectdTabValue:selectdAppTabReducer,
  drawerOpen:drawerOpenReducer,
  dialogOpen:confDialogOpenReducer,
  popOverLogin:popOverDialogOpenReducer,
  companyDetails: companyDetailsReducer,
  heroSection: heroReducer,
  uiReducer : uiReducer,
  userDetails:authReducer,
  form: formReducer,
  pendingStates: pendingReducer,


})
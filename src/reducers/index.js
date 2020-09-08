import { combineReducers } from 'redux';

import {
  selectdAppTabReducer,
  drawerOpenReducer,
  confDialogOpenReducer,
popOverDialogOpenReducer,previewDialogOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import heroReducer from './Hero/HeroReducer';
import heroCardReducer from './HeroCard/HeroCardReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import pendingReducer from './pendingReducer'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  selectdTabValue:selectdAppTabReducer,
  drawerOpen:drawerOpenReducer,
  dialogOpen:confDialogOpenReducer,
  previewOpen:previewDialogOpenReducer,
  popOverLogin:popOverDialogOpenReducer,
  companyDetails: companyDetailsReducer,
  heroSection: heroReducer,
  heroCardSection: heroCardReducer,
  uiReducer : uiReducer,
  userDetails:authReducer,
  form: formReducer,
  pendingStates: pendingReducer,


})
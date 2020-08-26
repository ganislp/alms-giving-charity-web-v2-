import { combineReducers } from 'redux';

import {selectdAppTabReducer,drawerOpenReducer,confDialogOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import heroReducer from './Hero/HeroReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  selectdTabValue:selectdAppTabReducer,
  drawerOpen:drawerOpenReducer,
  dialogOpen:confDialogOpenReducer,
  companyDetails: companyDetailsReducer,
  heroSection: heroReducer,
  uiReducer : uiReducer,
  form: formReducer,


})
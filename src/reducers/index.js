import { combineReducers } from 'redux';

import {selectdAppTabReducer,drawerOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import heroReducer from './Hero/HeroReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  selectdTabValue:selectdAppTabReducer,
  drawerOpen:drawerOpenReducer,
  companyDetails: companyDetailsReducer,
  heroDetails: heroReducer,
  uiReducer : uiReducer,
  form: formReducer,


})
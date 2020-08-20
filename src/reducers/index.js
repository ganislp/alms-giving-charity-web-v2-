import { combineReducers } from 'redux';
import {selectdAppTabReducer,drawerOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  tabOnSelect:selectdAppTabReducer,
  drawerOpen:drawerOpenReducer,
  companyDetails: companyDetailsReducer,
  uiReducer : uiReducer,
  form: formReducer,

})
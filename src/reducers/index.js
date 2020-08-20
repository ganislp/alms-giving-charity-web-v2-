import { combineReducers } from 'redux';
import {selectdAppTabReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  tabOnSelect:selectdAppTabReducer,
  companyDetails: companyDetailsReducer,
  uiReducer : uiReducer,
  form: formReducer,

})
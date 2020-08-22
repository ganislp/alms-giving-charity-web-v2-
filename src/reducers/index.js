import { combineReducers } from 'redux';
import {reducer as responsive} from 'redux-mediaquery'
import {selectdAppTabReducer,drawerOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  selectdTabValue:selectdAppTabReducer,
  drawerOpen:drawerOpenReducer,
  companyDetails: companyDetailsReducer,
  uiReducer : uiReducer,
  form: formReducer,
  browser: responsive,

})
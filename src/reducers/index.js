import { combineReducers } from 'redux';

import {
  selectdAppTabReducer,
  selectdSettingsAppTabReducer,
  drawerOpenReducer,
  confDialogOpenReducer,
popOverDialogOpenReducer,previewDialogOpenReducer} from './NavigationReducer';
import companyDetailsReducer from './CompanyDetailsReducer';
import heroReducer from './Hero/HeroReducer';
import heroCardReducer from './HeroCard/HeroCardReducer';
import AboutUsReducer from './AboutUs/AboutUsReducer';
import UpComingEventsReducer from './UpComingEventsReducer/UpComingEventsReducer';
import FeaturedCauseReducer from './FeaturedCauseReducer/FeaturedCauseReducer';
import OurCausesReducer from './OurCausesReducer/OurCausesReducer';
import CausesStatsReducer from './CausesStatsReducer/CausesStatsReducer';
import FooterReducer from './Footer/FooterReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import pendingReducer from './pendingReducer'
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  selectdTabValue:selectdAppTabReducer,
  selectdSettingsTabValue:  selectdSettingsAppTabReducer,
  drawerOpen:drawerOpenReducer,
  dialogOpen:confDialogOpenReducer,
  previewOpen:previewDialogOpenReducer,
  popOverLogin:popOverDialogOpenReducer,
  companyDetails: companyDetailsReducer,
  heroSection: heroReducer,
  heroCardSection: heroCardReducer,
  aboutUsSection: AboutUsReducer,
  upComingEventsSection: UpComingEventsReducer,
  featuredCauseSection: FeaturedCauseReducer,
  ourCausesSection: OurCausesReducer,
  causesStatsSection: CausesStatsReducer,
  footerSection:FooterReducer,
  uiReducer : uiReducer,
  userDetails:authReducer,
  form: formReducer,
  pendingStates: pendingReducer,


})
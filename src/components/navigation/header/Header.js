import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Router, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import AppHeader from './appBar/AppHeader';
import history from '../../../history';
import Settings from '../../settings/Settings';
import CreateHeroSection from '../../Hero/HeroSettings/CreateHeroSection';
import EditHeroSection from '../../Hero/HeroSettings/EditHeroSection';
import HeroSectionSettings from '../../Hero/HeroSettings/HeroSectionSettings';
import HeroCardSectionSettings from '../../HeroCard/HeroCardSettings/HeroCardSectionSettings';
import CreateHeroCardSection from '../../HeroCard/HeroCardSettings/CreateHeroCardSection';
import EditHeroCardSection from '../../HeroCard/HeroCardSettings/EditHeroCardSection';
import AboutUsSectionSettings from '../../Aboutus/AboutusSetting/AboutUsSectionSettings';
import CreateAboutUsSection from '../../Aboutus/AboutusSetting/CreateAboutUsSection';
import EditAboutUsSection from '../../Aboutus/AboutusSetting/EditAboutUsSection';
import UpComingEventsSettings from '../../UpComingEvents/UpComingSettings/UpComingEventsSettings';
import CreateUpComingEventsSection from '../../UpComingEvents/UpComingSettings/CreateUpComingEventsSection';
import EditUpComingEventsSection from '../../UpComingEvents/UpComingSettings/EditUpComingEventsSection';
import OurCausesSectionSettings from '../../OurCauses/OurCausesSettings/OurCausesSectionSettings'
import CreateOurCausesSection from '../../OurCauses/OurCausesSettings/CreateOurCausesSection';
import EditOurCausesSection from '../../OurCauses/OurCausesSettings/EditOurCausesSection';
import CausesStatsSettings from '../../CausesStats/CausesStatsSettings/CausesStatsSettings';
import CreateCausesStats from '../../CausesStats/CausesStatsSettings/CreateCausesStats';
import EditCausesStatsSection from '../../CausesStats/CausesStatsSettings/EditCausesStatsSection';
import CreateCausesStatsViewSection from '../../CausesStats/CausesStatsSettings/CreateCausesStatsViewSection';
import EditCausesStatsViewSection from '../../CausesStats/CausesStatsSettings/EditCausesStatsViewSection'
import Home from '../../Home/Home'
import { fetchCompanyDetails } from '../../../actions/api/companyDetailsApi';
import {fetchUser} from '../../../actions/api/authApi'
import { getHero,getHeroImages } from '../../../actions/api/heroApi';
import { getHeroCards } from '../../../actions/api/heroCardApi';
import { getAboutUs,getAboutUsImages } from '../../../actions/api/aboutUsApi';
import { getUpComingEvents,getUpComingEventsImages } from '../../../actions/api/upComingEventsApi';
import { getOurCauses,getOurCausesImages } from '../../../actions/api/ourCausesApi';
import { getCausesStats,getCausesStatsImages } from '../../../actions/api/causeStatsApi';
import { getCausesStatsView } from '../../../actions/api/causeStatsViewApi';



class Header extends React.Component {

  componentDidMount(){
  this.props.fetchCompanyDetails();
  this.props.fetchUser();
  this.props.getHero();
  this.props.getHeroImages();
  this.props.getHeroCards();
  this.props.getAboutUs();
  this.props.getAboutUsImages();
  this.props.getUpComingEvents();
  this.props.getUpComingEventsImages();
  this.props.getOurCauses();
  this.props.getOurCausesImages();
  this.props.getCausesStats();
  this.props.getCausesStatsImages();
  this.props.getCausesStatsView()
  }

  renderComponents(){
    if(!_.isEmpty(this.props.companyDetails) && this.props.isLoading){
      return <LinearProgress color="secondary"/>
     }
     else{
return <Router history={history}>
        <AppHeader />
        <Switch>
          <Route exact path="/" render={props => <Home {...this.props}/>}></Route>
          <Route exact path="/hero/heroSettings" render={props => <HeroSectionSettings {...this.props}/>}></Route>
          <Route exact path="/hero/heroCreate" component={() => <CreateHeroSection {...this.props}/>}></Route>
          <Route exact path="/hero/edit/:uid" component={props => <EditHeroSection {...props} {...this.props} />}></Route>
          <Route exact path="/heroCard/heroCardSettings" render={props => <HeroCardSectionSettings {...this.props}/>}></Route>
          <Route exact path="/heroCard/heroCardCreate" component={() => <CreateHeroCardSection {...this.props}/>}></Route>
          <Route exact path="/heroCard/edit/:uid" component={props => <EditHeroCardSection {...props} {...this.props} />}></Route>
          <Route exact path="/aboutus/aboutUsSectionSettings" render={props => <AboutUsSectionSettings {...this.props}/>}></Route>
          <Route exact path="/aboutus/heroAboutUsCreate" render={props => <CreateAboutUsSection {...this.props}/>}></Route>
          <Route exact path="/aboutus/edit/:uid" component={props => <EditAboutUsSection {...props} {...this.props} />}></Route>
          <Route exact path="/upComingEvents/upComingEventsSettings" render={props => <UpComingEventsSettings {...this.props}/>}></Route>
          <Route exact path="/upComingEvents/upComingEventsCreate" component={() => <CreateUpComingEventsSection {...this.props}/>}></Route>
          <Route exact path="/upComingEvents/edit/:uid" component={props => <EditUpComingEventsSection {...props} {...this.props} />}></Route>
          <Route exact path="/aboutus" component={() => <div>About Us</div>}></Route>
          <Route exact path="/ourCauses/ourCausesSectionSettings" render={props => <OurCausesSectionSettings {...this.props}/>}></Route>
          <Route exact path="/ourCauses/ourCausesCreate" render={props => <CreateOurCausesSection {...this.props}/>}></Route>
          <Route exact path="/ourCauses/edit/:uid" component={props => <EditOurCausesSection {...props} {...this.props} />}></Route>
          <Route exact path="/causesStats/causesStatsSettings" render={props => <CausesStatsSettings {...this.props}/>}></Route>
          <Route exact path="/causesStats/causesStatsCreate" component={() => <CreateCausesStats {...this.props}/>}></Route>
          <Route exact path="/causesStats/edit/:uid" component={props => <EditCausesStatsSection {...props} {...this.props} />}></Route>
          <Route exact path="/causesStats/causesStatsViewCreate" component={() => <CreateCausesStatsViewSection {...this.props}/>}></Route>
          <Route exact path="/causesStats/viewEdit/:uid" component={props => <EditCausesStatsViewSection {...props} {...this.props} />}></Route>
          <Route exact path="/causes" component={() => <div>Causes</div>}></Route>
          <Route exact path="/news" component={() => <div>News</div>}></Route>
          <Route exact path="/gallery" component={() => <div>Gallery</div>}></Route>
          <Route exact path="/contact" component={() => <div>News</div>}></Route>
          <Route exact path="/settings" component={() => (<Settings {...this.props}/>)}></Route> 
        </Switch>
      </Router>
     }
  }

  render() {
    return (
      this.renderComponents()
    )  
  }
}

const mapStateToProps = state => {
  return {
    companyDetails: state.companyDetails,
    isLoading: _.some(_.values(state.pendingStates.GET_COMPANY_DETAILS))   
    ,
  };
};

export default  connect(mapStateToProps,{
  fetchCompanyDetails,
  fetchUser,
  getHero,
  getHeroImages,
  getHeroCards,
  getAboutUs,
  getAboutUsImages,
  getUpComingEvents,
  getUpComingEventsImages,
  getOurCauses,
  getOurCausesImages ,
  getCausesStats,
  getCausesStatsImages,
  getCausesStatsView
})(Header);
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
import Home from '../../Home/Home'
import { fetchCompanyDetails } from '../../../actions/api/companyDetailsApi';
import {fetchUser} from '../../../actions/api/authApi'
import { getHero,getHeroImages } from '../../../actions/api/heroApi';
import { getHeroCards } from '../../../actions/api/heroCardApi';


class Header extends React.Component {

  componentDidMount(){
  this.props.fetchCompanyDetails();
  this.props.fetchUser();
  this.props.getHero();
  this.props.getHeroImages();
  this.props.getHeroCards();
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
          <Route exact path="/Aboutus/aboutUsSectionSettings" render={props => <AboutUsSectionSettings {...this.props}/>}></Route>
          <Route exact path="/aboutus" component={() => <div>About Us</div>}></Route>
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
    isLoading: _.some(_.values(state.pendingStates.GET_COMPANY_DETAILS)),
  };
};

export default  connect(mapStateToProps,{
  fetchCompanyDetails,
  fetchUser,
  getHero,
  getHeroImages,
  getHeroCards,
})(Header);
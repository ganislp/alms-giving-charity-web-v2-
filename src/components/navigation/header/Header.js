import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Router, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import AppHeader from './appBar/AppHeader';
import history from '../../../history';
import Settings from '../../settings/Settings';
import CreateHeroSection from '../../Hero/CreateHeroSection';
import EditHeroSection from '../../Hero/EditHeroSection';
import DeleteHeroSection from '../../Hero/DeleteHeroSection';
import HeroSectionList from '../../Hero/HeroSectionList';
import { fetchCompanyDetails } from '../../../actions/api/companyDetailsApi';




class Header extends React.Component {

  componentDidMount(){
  this.props.fetchCompanyDetails()
  }

  renderComponents(){
    
    if(!_.isEmpty(this.props.companyDetails) && this.props.isLoading){
      return <LinearProgress color="secondary"/>
     }
     else{
return <Router history={history}>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}></Route>
          <Route exact path="/hero/heroList" render={props => <HeroSectionList {...this.props}/>}></Route>
          <Route exact path="/hero/heroCreate" component={() => <CreateHeroSection {...this.props}/>}></Route>
          <Route exact path="/hero/edit/:uid" component={props => <EditHeroSection {...props} {...this.props} />}></Route>
          {/* <Route exact path="/hero/delete/:uid" component={props => <DeleteHeroSection {...props} {...this.props} />}></Route> */}
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
    isLoading: state.companyDetails.loading
  };
};

export default  connect(mapStateToProps,{fetchCompanyDetails})(Header);
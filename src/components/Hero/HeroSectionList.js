import React from 'react';
import { connect } from 'react-redux';
import {getHero} from '../../actions/api/heroApi'

class HeroSectionList extends React.Component {

render(){
  return(
    <div>test</div>
  )
}
}

const mapStateToProps = state => {
  console.log(state)
  return {
    heroDetails: state.companyDetails,
  };
};
export  default  connect(mapStateToProps,{getHero})(HeroSectionList) ;
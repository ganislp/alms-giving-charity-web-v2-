import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import OurCausesImageSlider from './OurCausesImageSlider'



class OurCausesSectionView extends Component{

  render(){
    const {imageUrl} = Object.assign({}, ...this.props.ourCausesImageBackground);
  //console.log("OurCausesSectionView",imageUrl)
    return(

<OurCausesImageSlider backgroundImage={imageUrl}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ourCausesImageBackground:   Object.values(state.ourCausesSection.ourCausesImages).filter(item => item.backround === true && item.active === true),
  }
 
}

export default connect(mapStateToProps,{})(OurCausesSectionView);
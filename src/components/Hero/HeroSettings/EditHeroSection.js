import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditHero,getHero} from '../../../actions/api/heroApi';
import HeroSectionForm from './HeroSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditHeroSection extends Component{

  componentDidMount(){
    this.props.getHero(this.props.match.params.uid);
  }

  onSubmit = formValues => {
    this.props.EditHero(this.props.match.params.uid,formValues);
    console.log("this.props.match",this.props)
  };


  render(){
    console.log("this.props.match",this.props)
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <HeroSectionForm initialValues={_.pick(this.props.heroDetails,'heading','subHeading','body')} onSubmit={this.onSubmit}/>
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    heroDetails: state.heroSection.heroDetails[ownProps.match.params.uid],
    isSubmiting: state.heroSection.onSubmiting,
  }
 
}

export default connect(mapStateToProps,{EditHero,getHero})(EditHeroSection);
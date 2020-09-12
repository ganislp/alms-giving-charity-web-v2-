import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createAboutUs,getAboutUss,getAboutUsImages } from '../../../actions/api/heroCardApi';
import AboutUsSectionForm from './AboutUsSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateAboutUsSection extends Component {

  onSubmit = formValues => {
    let isActive = false;
    if(_.isEmpty(this.props.heroCardDetails)){
       isActive = true;
    }
 this.props.createAboutUs(formValues,isActive);
  };

  componentDidMount() {
    this.props.getAboutUsImages();
  }

  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <AboutUsSectionForm onSubmit={this.onSubmit} isEdit={false}
           heroCardImages={this.props.heroCardImages}
           FormName="CreateAboutUsForm"
           label="Create Hero Crad Content"
           />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {
    heroCardDetails:  Object.values(state.heroCardSection.heroCardDetails),
    heroCardImages: Object.values(state.heroCardSection.heroCardImages),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_HERO_CARD)),
  };
};
export default connect(mapStateToProps, { createAboutUs,getAboutUss,getAboutUsImages })(withTheme(withStyles(useStyles)(CreateAboutUsSection)));
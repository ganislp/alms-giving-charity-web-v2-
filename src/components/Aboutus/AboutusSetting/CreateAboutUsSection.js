import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createAboutUs } from '../../../actions/api/aboutUsApi';
import AboutUsSectionForm from './AboutUsSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateAboutUsSection extends Component {

  onSubmit = formValues => {
    let isActive = false;
    if(_.isEmpty(this.props.aboutUsDetails)){
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
           FormName="CreateAboutUsForm"
           label="Create About Us Content"
           />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {
    aboutUsDetails:  Object.values(state.aboutUsSection.aboutUsDetails),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_ABOUT_US)),
  };
};
export default connect(mapStateToProps, { createAboutUs })(withTheme(withStyles(useStyles)(CreateAboutUsSection)));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createOurCauses} from '../../../actions/api/ourCausesApi';
import OurCausesForm from './OurCausesForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateOurCausesSection extends Component {

  onSubmit = formValues => {
  
 
    
 const {fileName} = Object.assign({}, ...Object.values((this.props.ourCausesImages.filter(image => image.imageUrl === formValues.imageUrl))));
 this.props.createOurCauses({...formValues,fileName:fileName});
  };



  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <OurCausesForm onSubmit={this.onSubmit} isEdit={false}
           FormName="CreateOurCausesForm"
           label="Create Our Causes"
           />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {  
    ourCausesDetails:  Object.values(state.ourCausesSection.ourCausesDetails),
    ourCausesImages: Object.values(state.ourCausesSection.ourCausesImages),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_OUR_CAUSES_EVENTS)),
  };
};
export default connect(mapStateToProps, {createOurCauses })(withTheme(withStyles(useStyles)(CreateOurCausesSection)));
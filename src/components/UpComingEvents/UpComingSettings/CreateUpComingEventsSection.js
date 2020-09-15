import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { CreateUpComingEvents } from '../../../actions/api/upComingEventsApi';
import UpComingEventsForm from './UpComingEventsForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateUpComingEventsSection extends Component {

  onSubmit = formValues => {
    let isActive = false;
    if(_.isEmpty(this.props.upComingEventsDetails)){
       isActive = true;
    }
 const {fileName} = Object.assign({}, ...Object.values((this.props.upComingEventsImages.filter(image => image.imageUrl === formValues.imageUrl))));
 this.props.CreateUpComingEvents({...formValues,fileName:fileName},isActive);
  };



  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <UpComingEventsForm onSubmit={this.onSubmit} isEdit={false}
           FormName="CreateUpComingEventsForm"
           label="Create Upcoming Events"
           />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {  
    upComingEventsDetails:  Object.values(state.upComingEventsSection.upComingEventsDetails),
    upComingEventsImages: Object.values(state.upComingEventsSection.upComingEventsImages),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_UP_COMING_EVENTS)),
  };
};
export default connect(mapStateToProps, {CreateUpComingEvents })(withTheme(withStyles(useStyles)(CreateUpComingEventsSection)));
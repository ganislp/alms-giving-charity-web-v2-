import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { 
  EditUpComingEvents,
  getUpComingEvents,
  getUpComingEventsImages,
  updateImageActive,
  updateImageInActive} from '../../../actions/api/upComingEventsApi';
import UpComingEventsSectionForm from './UpComingEventsForm';
import ContentBuilder from '../../ui/ContentBuilder';


class EditUpComingEventsSection extends Component{

  componentDidMount(){
    this.props.getUpComingEvents(this.props.match.params.uid);
    this.props.getUpComingEventsImages();
  }

  onSubmit = formValues => {
    const {fileName,imageUrl} = Object.assign({}, ...Object.values((this.props.upComingEventsImages.filter(image => image.imageUrl === formValues.imageUrl))));
    const existingImageNew=   Object.assign({}, ...Object.values((this.props.upComingEventss.filter(card => card.fileName === fileName))));
    const newImagefileName =   _.some(this.props.upComingEventss, function(card) {return card.fileName === fileName}) 
    const existingUpComingEvents = this.props.upComingEventsDetails;
     
    if(existingUpComingEvents.fileName === fileName || !newImagefileName){
     this.props.EditUpComingEvents(this.props.match.params.uid,{...formValues,fileName:fileName}) 
    }
    else{
   this.props.EditUpComingEvents(this.props.match.params.uid,{...formValues,fileName:fileName,imageUrl:imageUrl});
      this.props.EditUpComingEvents(existingImageNew.uid,{fileName:existingUpComingEvents.fileName,imageUrl:existingUpComingEvents.imageUrl});        
    }
      
  };


  render(){
   
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <UpComingEventsSectionForm 
       enableReinitialize ={true}  
       destroyOnUnmount={false}
       initialValues={_.pick(this.props.upComingEventsDetails,'heading','body','imageUrl','location','eventDate')}
       isEdit={true}
       FormName="editUpComingEventsForm"
       label="Edit Up Coming Events"
      onSubmit={this.onSubmit}/>
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    upComingEventsDetails: state.upComingEventsSection.upComingEventsDetails[ownProps.match.params.uid],
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_UP_COMING_EVENTS)),
    upComingEventsImages: Object.values(state.upComingEventsSection.upComingEventsImages), 
    upComingEventss: Object.values(state.upComingEventsSection.upComingEventsDetails),  
  }
 
}

export default connect(mapStateToProps,{
  EditUpComingEvents,
  getUpComingEvents,
  getUpComingEventsImages,
  updateImageActive,
  updateImageInActive})(EditUpComingEventsSection);
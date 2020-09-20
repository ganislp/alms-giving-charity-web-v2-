import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditOurCauses} from '../../../actions/api/ourCausesApi';
import OurCausesForm from './OurCausesForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditOurCausesSection extends Component{

 

  onSubmit = formValues => {
    
    const {fileName,imageUrl} = Object.assign({}, ...Object.values((this.props.ourCausesImages.filter(image => image.imageUrl === formValues.imageUrl))));
    const existingImageNew=   Object.assign({}, ...Object.values((this.props.ourCausesDetailss.filter(card => card.fileName === fileName))));
    const newImagefileName =   _.some(this.props.ourCausesDetailss, function(card) {return card.fileName === fileName}) 
    const existingourCausesDetails = this.props.ourCausesDetails;
     
    if(existingourCausesDetails.fileName === fileName || !newImagefileName){
 
     this.props.EditOurCauses(this.props.match.params.uid,{...formValues,fileName:fileName}) 
    }
    else{
   this.props.EditOurCauses(this.props.match.params.uid,{...formValues,fileName:fileName,imageUrl:imageUrl});
      this.props.EditOurCauses(existingImageNew.uid,{fileName:existingourCausesDetails.fileName,imageUrl:existingourCausesDetails.imageUrl});        
    }

  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <OurCausesForm initialValues={_.pick(this.props.ourCausesDetails,'heading','body','foundRaised','foundGoal','imageUrl')}
       enableReinitialize ={true}  
       destroyOnUnmount={false}
        onSubmit={this.onSubmit} 
        FormName="editOurCausesForm"
        label="Edit Our Cause"
        isEdit={true}
        />
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ourCausesDetails:  state.ourCausesSection.ourCausesDetails[ownProps.match.params.uid],
    ourCausesImages: Object.values(state.ourCausesSection.ourCausesImages),
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_OUR_CAUSES)),
    ourCausesDetailss:  Object.values(state.ourCausesSection.ourCausesDetails),
  }
 
}

export default connect(mapStateToProps,{EditOurCauses})(EditOurCausesSection);
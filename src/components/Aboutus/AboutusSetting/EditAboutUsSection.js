import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditAboutUs} from '../../../actions/api/aboutUsApi';
import AboutUsSectionForm from './AboutUsSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditAboutUsSection extends Component{

  componentDidMount(){
    this.props.getAboutUs(this.props.match.params.uid);
  }

  onSubmit = formValues => {
    // this.props.EditAboutUs(this.props.match.params.uid,formValues);

    // this.props.EditOurCauses(this.props.match.params.uid,formValues);
    const {fileName,imageUrl} = Object.assign({}, ...Object.values((this.props.aboutUsImages.filter(image => image.imageUrl === formValues.imageUrl))));
    const existingImageNew=   Object.assign({}, ...Object.values((this.props.aboutUsDetailss.filter(card => card.fileName === fileName))));
    const newImagefileName =   _.some(this.props.aboutUsDetailss, function(card) {return card.fileName === fileName}) 
    const existingAboutUsDetails = this.props.aboutUsDetails;
     
    if(existingAboutUsDetails.fileName === fileName || !newImagefileName){
 
     this.props.EditAboutUs(this.props.match.params.uid,{...formValues,fileName:fileName}) 
    }
    else{
   this.props.EditAboutUs(this.props.match.params.uid,{...formValues,fileName:fileName,imageUrl:imageUrl});
      this.props.EditAboutUs(existingImageNew.uid,{fileName:existingAboutUsDetails.fileName,imageUrl:existingAboutUsDetails.imageUrl});        
    }


  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <AboutUsSectionForm initialValues={_.pick(this.props.aboutUsDetails,'heading','body','imageUrl')}
       enableReinitialize ={true}  
       destroyOnUnmount={false}
        onSubmit={this.onSubmit} 
        FormName="editAboutUsForm"
        isEdit={true}
        />
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    aboutUsDetails:  state.aboutUsSection.aboutUsDetails[ownProps.match.params.uid],
    aboutUsImages: Object.values(state.aboutUsSection.aboutUsImages),
    aboutUsDetailss:  Object.values(state.aboutUsSection.aboutUsDetails),
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_ABOUT_US)),
  }
 
}

export default connect(mapStateToProps,{EditAboutUs})(EditAboutUsSection);
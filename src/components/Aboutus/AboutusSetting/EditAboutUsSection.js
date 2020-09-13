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
    this.props.EditAboutUs(this.props.match.params.uid,formValues);

  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <AboutUsSectionForm initialValues={_.pick(this.props.aboutUsDetails,'heading','body')}
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
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_ABOUT_US)),
  }
 
}

export default connect(mapStateToProps,{EditAboutUs})(EditAboutUsSection);
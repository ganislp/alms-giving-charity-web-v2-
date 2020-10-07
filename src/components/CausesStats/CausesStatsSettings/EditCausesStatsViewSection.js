import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditCausesStatsView,getCausesStatsView} from '../../../actions/api/causeStatsViewApi';
import CausesStatsViewForm from './CausesStatsViewForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditCausesStatsViewSection extends Component{

  componentDidMount(){
    this.props.getCausesStatsView(this.props.match.params.uid);
  }

  onSubmit = formValues => {
    const {fileName,imageUrl} = Object.assign({}, ...Object.values((this.props.causesStatsImages.filter(image => image.imageUrl === formValues.imageUrl))));
    const existingImageNew=   Object.assign({}, ...Object.values((this.props.causesStatsViewDetailss.filter(card => card.fileName === fileName))));
    const newImagefileName =   _.some(this.props.causesStatsViewDetailss, function(card) {return card.fileName === fileName}) 
    const existingHeroCard = this.props.causesStatsViewDetails;
     
    if(existingHeroCard.fileName === fileName || !newImagefileName){
     this.props.EditCausesStatsView(this.props.match.params.uid,{...formValues,fileName:fileName}) 
    }
    else{
   this.props.EditCausesStatsView(this.props.match.params.uid,{...formValues,fileName:fileName,imageUrl:imageUrl});
      this.props.EditCausesStatsView(existingImageNew.uid,{fileName:existingHeroCard.fileName,imageUrl:existingHeroCard.imageUrl});        
    }

  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <CausesStatsViewForm initialValues={_.pick(this.props.causesStatsViewDetails,'heading','stats','imageUrl')}
       enableReinitialize ={true}  
       destroyOnUnmount={false}
        onSubmit={this.onSubmit} 
        FormName="editCausesStatsViewForm"
        isEdit={true}
        />
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    causesStatsViewDetails: state.causesStatsSection.causesStatsViewDetails[ownProps.match.params.uid],
    causesStatsImages: Object.values(state.causesStatsSection.causesStatsImages),
    causesStatsViewDetailss: Object.values(state.causesStatsSection.causesStatsViewDetails),

    isSubmiting: _.some(_.values(state.pendingStates.EDIT_CAUSES_STATS_VIEW)),
  }
 
}

export default connect(mapStateToProps,{EditCausesStatsView,getCausesStatsView})(EditCausesStatsViewSection);
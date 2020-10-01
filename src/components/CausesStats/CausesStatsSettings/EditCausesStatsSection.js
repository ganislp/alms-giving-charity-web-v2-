import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditCausesStats,getCausesStats} from '../../../actions/api/causeStatsApi';
import CausesStatsForm from './CausesStatsForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditCausesStatsSection extends Component{

  componentDidMount(){
    this.props.getCausesStats(this.props.match.params.uid);
  }

  onSubmit = formValues => {
    this.props.EditCausesStats(this.props.match.params.uid,formValues);

  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <CausesStatsForm initialValues={_.pick(this.props.causesStatsDetails,'heading','body')}
       enableReinitialize ={true}  
       destroyOnUnmount={false}
        onSubmit={this.onSubmit} 
        FormName="editCausesStatsForm"
        isEdit={true}
        />
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    causesStatsDetails: state.causesStatsSection.causesStatsDetails[ownProps.match.params.uid],
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_HERO)),
  }
 
}

export default connect(mapStateToProps,{EditCausesStats,getCausesStats})(EditCausesStatsSection);
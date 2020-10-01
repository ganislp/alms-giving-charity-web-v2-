import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createCausesStats,getCausesStats } from '../../../actions/api/causeStatsApi';
import CausesStatsForm from './CausesStatsForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateCausesStats extends Component {

  onSubmit = formValues => {
    let isActive = false;
    if(_.isEmpty(this.props.causesStatsDetails)){
       isActive = true;
    }
    this.props.createCausesStats(formValues,isActive);
  };

  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <CausesStatsForm 
          onSubmit={this.onSubmit} 
          isEdit={false}
          FormName="createCausesStatsForm"
          />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {
    causesStatsDetails:  Object.values(state.causesStatsSection.causesStatsDetails),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_CAUSES_STATS)),
  };
};
export default connect(mapStateToProps, { createCausesStats,getCausesStats })(withTheme(withStyles(useStyles)(CreateCausesStats)));
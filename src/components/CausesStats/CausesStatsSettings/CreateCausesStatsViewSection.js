import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createCausesStatsView} from '../../../actions/api/causeStatsViewApi';
import CausesStatsViewForm from './CausesStatsViewForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateCausesStatsViewSection extends Component {

  onSubmit = formValues => {
 
 const {fileName} = Object.assign({}, ...Object.values((this.props.causesStatsImages.filter(image => image.imageUrl === formValues.imageUrl))));
 this.props.createCausesStatsView({...formValues,fileName:fileName});
  };

  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <CausesStatsViewForm onSubmit={this.onSubmit} isEdit={false}
          //  causesStatsViewImages={this.props.causesStatsViewImages}
           FormName="CreateCausesStatsViewForm"
           label="Create Hero Crad Content"
           />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {
    causesStatsImages: Object.values(state.causesStatsSection.causesStatsImages),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_CAUSES_STATS_VIEW)),
  };
};
export default connect(mapStateToProps, { createCausesStatsView })(withTheme(withStyles(useStyles)(CreateCausesStatsViewSection)));
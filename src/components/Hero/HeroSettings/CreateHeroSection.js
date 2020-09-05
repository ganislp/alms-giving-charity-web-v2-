import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createHero,getHero } from '../../../actions/api/heroApi';
import HeroSectionForm from './HeroSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateHeroSection extends Component {

  onSubmit = formValues => {
    let isActive = false;
    if(_.isEmpty(this.props.heroDetails)){
       isActive = true;
    }
    this.props.createHero(formValues,isActive);
  };

  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <HeroSectionForm onSubmit={this.onSubmit} />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {
    heroDetails:  Object.values(state.heroSection.heroDetails),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_HERO)),
  };
};
export default connect(mapStateToProps, { createHero,getHero })(withTheme(withStyles(useStyles)(CreateHeroSection)));
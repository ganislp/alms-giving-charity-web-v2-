import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createCardHero,getHeroCards } from '../../../actions/api/heroCardApi';
import HeroCardSectionForm from './HeroCardSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

const useStyles = theme => ({
 
});

class CreateHeroCardSection extends Component {

  onSubmit = formValues => {
    let isActive = false;
    if(_.isEmpty(this.props.heroCardDetails)){
       isActive = true;
    }
 this.props.createCardHero(formValues,isActive);
  };

  render() {
    return (
    
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <HeroCardSectionForm onSubmit={this.onSubmit} isEdit={false}/>
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  console.log("heroSettingsSection", state.pendingStates);
  return {
    heroCardDetails:  Object.values(state.heroCardSection.heroCardDetails),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_HERO_CARD)),
  };
};
export default connect(mapStateToProps, { createCardHero,getHeroCards })(withTheme(withStyles(useStyles)(CreateHeroCardSection)));
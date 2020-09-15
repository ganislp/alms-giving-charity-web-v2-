import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createCardHero} from '../../../actions/api/heroCardApi';
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
 const {fileName} = Object.assign({}, ...Object.values((this.props.heroCardImages.filter(image => image.imageUrl === formValues.cardImage))));
 this.props.createCardHero({...formValues,fileName:fileName},isActive);
  };

  // componentDidMount() {
  //   this.props.getHeroCardImages();
  // }

  render() {
    return (
      <ContentBuilder  isSubmiting ={this.props.isSubmiting}>
          <HeroCardSectionForm onSubmit={this.onSubmit} isEdit={false}
          //  heroCardImages={this.props.heroCardImages}
           FormName="CreateHeroCardForm"
           label="Create Hero Crad Content"
           />
      </ContentBuilder>
    )
  }
}
const mapStateToProps = state => {
  return {
    heroCardDetails:  Object.values(state.heroCardSection.heroCardDetails),
    heroCardImages: Object.values(state.heroCardSection.heroCardImages),
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_HERO_CARD)),
  };
};
export default connect(mapStateToProps, { createCardHero })(withTheme(withStyles(useStyles)(CreateHeroCardSection)));
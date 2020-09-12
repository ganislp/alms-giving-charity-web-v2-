import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditHeroCard,getHeroCards,getHeroCardImages} from '../../../actions/api/heroCardApi';
import HeroCardSectionForm from './HeroCardSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditHeroCardSection extends Component{

  componentDidMount(){
    this.props.getHeroCards(this.props.match.params.uid);
    this.props.getHeroCardImages();
  }

  onSubmit = formValues => {
    const {fileName} = Object.assign({}, ...Object.values((this.props.heroCardImages.filter(image => image.imageUrl === formValues.cardImage))));
    this.props.EditHeroCard(this.props.match.params.uid,{...formValues,fileName:fileName});
  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <HeroCardSectionForm 
       enableReinitialize ={true}  
       destroyOnUnmount={false}
       initialValues={_.pick(this.props.heroCardDetails,'heading','body','cardImage')}
       heroCardImages={this.props.heroCardImages}
       isEdit={true}
       FormName="editHeroCardForm"
       label="Edit Hero Crad Content"
      onSubmit={this.onSubmit}/>
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    heroCardDetails: state.heroCardSection.heroCardDetails[ownProps.match.params.uid],
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_HERO_CARD)),
    heroCardImages: Object.values(state.heroCardSection.heroCardImages),   
  }
 
}

export default connect(mapStateToProps,{EditHeroCard,getHeroCards,getHeroCardImages})(EditHeroCardSection);
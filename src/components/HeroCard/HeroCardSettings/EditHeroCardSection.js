import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { 
  EditHeroCard,
  getHeroCards,
  getHeroCardImages,
  updateImageActive,
  updateImageInActive} from '../../../actions/api/heroCardApi';
import HeroCardSectionForm from './HeroCardSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';
import { Card } from '@material-ui/core';

class EditHeroCardSection extends Component{

  componentDidMount(){
    this.props.getHeroCards(this.props.match.params.uid);
    this.props.getHeroCardImages();
  }

  onSubmit = formValues => {
    const {fileName,imageUrl} = Object.assign({}, ...Object.values((this.props.heroCardImages.filter(image => image.imageUrl === formValues.cardImage))));
    const existingImageNew=   Object.assign({}, ...Object.values((this.props.heroCards.filter(card => card.fileName === fileName))));
    const newImagefileName =   _.some(this.props.heroCards, function(card) {return card.fileName === fileName}) 
    const existingHeroCard = this.props.heroCardDetails;
     
    if(existingHeroCard.fileName === fileName || !newImagefileName){
     this.props.EditHeroCard(this.props.match.params.uid,{...formValues,fileName:fileName}) 
    }
    else{
   this.props.EditHeroCard(this.props.match.params.uid,{...formValues,fileName:fileName,cardImage:imageUrl});
      this.props.EditHeroCard(existingImageNew.uid,{fileName:existingHeroCard.fileName,cardImage:existingHeroCard.cardImage});        
    }
      
  };


  render(){
   
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <HeroCardSectionForm 
       enableReinitialize ={true}  
       destroyOnUnmount={false}
       initialValues={_.pick(this.props.heroCardDetails,'heading','body','cardImage')}
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
    heroCards: Object.values(state.heroCardSection.heroCardDetails),  
  }
 
}

export default connect(mapStateToProps,{
  EditHeroCard,
  getHeroCards,
  getHeroCardImages,
  updateImageActive,
  updateImageInActive})(EditHeroCardSection);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { EditHeroCard,getHeroCards} from '../../../actions/api/heroCardApi';
import HeroCardSectionForm from './HeroCardSectionForm';
import ContentBuilder from '../../ui/ContentBuilder';

class EditHeroCardSection extends Component{

  componentDidMount(){
    this.props.getHeroCards(this.props.match.params.uid);
  }

  onSubmit = formValues => {
    this.props.EditHeroCard(this.props.match.params.uid,formValues);

  };


  render(){
    return(
     <ContentBuilder isSubmiting ={this.props.isSubmiting}>
       <HeroCardSectionForm 
       initialValues={_.pick(this.props.heroCardDetails,'heading','body')}
       isEdit={true}
        onSubmit={this.onSubmit}/>
     </ContentBuilder>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    heroCardDetails: state.heroCardSection.heroCardDetails[ownProps.match.params.uid],
    isSubmiting: _.some(_.values(state.pendingStates.EDIT_HERO_CARD)),
  }
 
}

export default connect(mapStateToProps,{EditHeroCard,getHeroCards})(EditHeroCardSection);
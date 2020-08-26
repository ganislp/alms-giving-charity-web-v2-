import React from 'react';
import { connect } from 'react-redux';
import {confiDialogOpen} from '../../actions/uiActions/navigationAcions';
import ConfimationDialog from '../model/ConfimationDialog';
import {deleteHero} from '../../actions/api/heroApi';

class DeleteHeroSection extends React.Component{

  componentDidMount(){
this.props.confiDialogOpen(true);
  }

  dialogButtonClick = () => {
    this.props.deleteHero(this.props.match.params.uid)
}

  render(){
    return(
<ConfimationDialog dialogButtonClick={this.dialogButtonClick}/>
    )
  }
}

export default connect(null,{confiDialogOpen,deleteHero}) (DeleteHeroSection);
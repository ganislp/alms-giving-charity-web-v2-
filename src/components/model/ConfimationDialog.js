import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {confiDialogOpen} from '../../actions/uiActions/navigationAcions';


class ConfimationDialog extends React.Component{

  handleClose = () => {
    this.props.confiDialogOpen({open:false,heroListSeletedUid:{},heroImageSeletedUid:{}})
  };
  render(){
    return(

    
     
      <Dialog
        open={this.props.dialogOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {this.props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="secondary" onClick={this.handleClose}>
           No
          </Button>
          <Button  color="secondary" autoFocus onClick={this.props.dialogButtonClick}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

    )
  }
}

const mapStateToProps = state => {
  return {
    dialogOpen: state.dialogOpen.open,
  };
};

export default connect(mapStateToProps,{confiDialogOpen}) (ConfimationDialog);
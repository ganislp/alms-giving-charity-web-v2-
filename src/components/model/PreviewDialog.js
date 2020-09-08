import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {previewDialogOpen} from '../../actions/uiActions/navigationAcions';
import { Grid } from '@material-ui/core';


class PreviewDialog extends React.Component{

  handleClose = () => {
    this.props.previewDialogOpen(false,null)
  };
  render(){
  
    return(
      <Dialog     
        open={this.props.dialogOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{  zIndex: 1302,}}
      >
      
        <DialogContent style={{ padding:"1em"
 }}>
      
          {this.props.children}
       
  
        </DialogContent>
       
      </Dialog>

    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    dialogOpen: state.previewOpen.previewOpen,
  };
};

export default connect(mapStateToProps,{previewDialogOpen}) (PreviewDialog);
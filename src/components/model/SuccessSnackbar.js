import React from 'react';
import { connect } from 'react-redux';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { clearSnackbar,showSnackbar } from "../../actions/uiActions/snackbarActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class SuccessSnackbar extends React.Component {
 
  handleClose = () => {
    this.props.clearSnackbar();
  }
 renderAlerts(){
   if(this.props.failed && !this.props.success){
     return  <Alert severity="error">{this.props.successSnackbarMessage}</Alert>
   }
   if(this.props.success && !this.props.failed){
    return  <Alert severity="success">{this.props.successSnackbarMessage}</Alert>
  }
 }


  render(){
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={this.props.snackbarOpen}
      autoHideDuration={6000}
      severity="error"
      onClose={this.handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <Icon>check_circle</Icon>
          {this.props.successSnackbarMessage}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ]}
    >
    
     {this.renderAlerts()}
    
    </Snackbar>
  );
}

}

const mapStateToProps = state => {
  return {
    snackbarOpen : state.uiReducer.snackbarOpen,
    success : state.uiReducer.success,
    failed : state.uiReducer.failed,
    successSnackbarMessage: state.uiReducer.successSnackbarMessage
  };
};

export default connect(mapStateToProps,{showSnackbar,clearSnackbar})(SuccessSnackbar);
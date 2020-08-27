import React from "react";
import { connect } from 'react-redux';
import { Popover, LinearProgress,Grid ,Button,Typography} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {popOverDialogOpen} from '../../actions/uiActions/navigationAcions';
import {LoginButton } from '../ui/Buttons';

const useStyles = theme => ({
 popOverContainer:{
  zIndex: 5,
 }

});

class LoginPopOver extends React.Component{




 handleClick = (event) => {
   this.props.popOverDialogOpen(true,event.currentTarget)
  };

 handleClose = () => {
  this.props.popOverDialogOpen(false,null)
  };

  render(){
    const { classes,theme } = this.props;
    const id = this.props.popOverLogin.popOverOpen ? 'simple-popover' : undefined;
    return(
      <Grid container>
        <Grid  item>
      {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={this.handleClick}> */}
        <LoginButton onLoginPopClick={this.handleClick} id={id} buttonLabel={this.props.buttonLabel}/>
    
      {/* </Button> */}
      </Grid >
      <Grid  item>
      <Popover  disablePortal
        id={id}
        open={this.props.popOverLogin.popOverOpen}
        anchorEl={this.props.popOverLogin.anchorEl}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
           {this.props.children}
      </Popover>
      </Grid>
      </Grid>
    )
  }
}
const mapStateToProps = state => {
 // console.log("popOverLogin",state.popOverLogin)
  return {
    popOverLogin: state.popOverLogin,
  };
};
export default  connect(mapStateToProps,{popOverDialogOpen})(withTheme(withStyles(useStyles)(LoginPopOver)));
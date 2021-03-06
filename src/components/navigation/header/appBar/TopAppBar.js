import React from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Typography, Container, Hidden } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { DonateButtonHeader,TextButton } from '../../../ui/Buttons';
import LoginPopOver from '../../../login/LoginPopOver';
import LoginForm from '../../../login/LoginForm';
import { cookies,logout } from '../../../../actions/api/authApi';
import {popOverDialogOpen} from '../../../../actions/uiActions/navigationAcions';

const useStyles = theme => ({
  mainContainer: {
    backgroundColor: theme.palette.common.blue,
  },

  // itemContainer:{
  //   paddingLeft:"16px",
  //    paddingTop:"16px",
  //  },
  //  [theme.breakpoints.down("xs")]: {
  //   paddingLeft:"0px",
  //    paddingTop:"0px",
  // }

});

class TopAppBar extends React.Component {
 

  logout = () => {
    this.props.logout();
    this.props.popOverDialogOpen(false,null)
  }

renderLoginButton(){

  const isAuthenticated =  cookies.get('isAuthenticated');
 if(isAuthenticated === 'true'){
  return <TextButton buttonLabel="Logout" click={this.logout}></TextButton>
 }
 else{
 return <LoginPopOver buttonLabel="LogIn">
   <LoginForm />
 </LoginPopOver>
 }
}


  render() {
    
    const { contactDetails } = { ...this.props.companyDetails };
    const { email, phone } = { ...contactDetails };
    const { classes, theme } = this.props;

    if (_.isEmpty(this.props.companyDetails)) {
      return <Grid container justify="center" alignItems="center" className={classes.mainContainer}>
        <Grid item  >
          <Typography variant="h6" style={{ ...theme.palette.typography.caption }}>

          </Typography>
        </Grid>
      </Grid>
    }
    return (
      <Grid container className={classes.mainContainer}>
        <Container maxWidth="lg" >
          <Grid container justify="space-between" alignItems="center">
            <Hidden xsDown>
              <Grid item  >
                <Typography variant="h6" style={{ ...theme.palette.typography.caption }}>MAIL: {email}</Typography>
              </Grid>
              <Grid item >
                <Typography variant="h6" style={{ ...theme.palette.typography.caption }}>PHONE: {phone}</Typography>
              </Grid>

              <Grid item  >
                <Grid item container>
                  <Grid item>
                    <DonateButtonHeader />

                  </Grid>
                  <Grid item>
                    {this.renderLoginButton()}
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item container justify="space-between" >
                <Grid item  >
                  <DonateButtonHeader />
                </Grid>
                <Grid item  >
                {this.renderLoginButton()}
                </Grid>
              </Grid>

            </Hidden>

          </Grid>
        </Container>
      </Grid>


    )
  }
}

const mapStateToProps = state => {
  return {
    companyDetails: Object.assign({}, ...Object.values(state.companyDetails))
  };

};

export default connect(mapStateToProps, {logout,popOverDialogOpen})(withTheme(withStyles(useStyles)(TopAppBar)));

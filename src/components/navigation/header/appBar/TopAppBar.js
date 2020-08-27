import React from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid, Typography, Container, Hidden } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { DonateButtonHeader } from '../../../ui/Buttons';
import LoginPopOver from '../../../login/LoginPopOver'
import LoginForm from '../../../login/LoginForm'

const useStyles = theme => ({
  mainContainer: {
    backgroundColor: theme.palette.common.blue,
  },

});

class TopAppBar extends React.Component {


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
            <Hidden smDown>
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
                    <LoginPopOver buttonLabel="LogIn">
                      <LoginForm />
                    </LoginPopOver>
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
                  <LoginPopOver buttonLabel="LogIn">
                    <LoginForm />
                  </LoginPopOver>
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
    companyDetails: Object.assign({}, ...Object.values(state.companyDetails)),
  };

};

export default connect(mapStateToProps, {})(withTheme(withStyles(useStyles)(TopAppBar)));

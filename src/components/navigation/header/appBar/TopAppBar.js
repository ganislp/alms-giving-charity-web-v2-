import React from "react";
import { Grid, Typography, Container } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';

const useStyles = theme => ({
  mainContainer: {
    backgroundColor: theme.palette.common.blue,
  },

});

class TopAppBar extends React.Component {


  render() {
    const { classes, theme } = this.props;
    return (

      <Grid container className={classes.mainContainer}>

        <Container maxWidth="lg" >
          <Grid container justify="space-between" alignItems="center">
            <Grid item  >
              <Typography variant="h6" style={{ ...theme.palette.typography.caption }}>MAIL:</Typography>
            </Grid>
            <Grid item >
              <Typography variant="h6" style={{ ...theme.palette.typography.caption }}>PHONE:</Typography>
            </Grid>
            <Grid item >
              <Typography variant="h6" style={{ ...theme.palette.typography.caption }}>Donate Now:</Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>


    )
  }
}

export default (withTheme(withStyles(useStyles)(TopAppBar)));

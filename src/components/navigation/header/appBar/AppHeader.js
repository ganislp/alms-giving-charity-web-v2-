import React, { Component } from 'react';
import { AppBar, Toolbar, Grid, Container, Hidden } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import DrawerBuilder from './drawer/DrawerBuilder'

import TopAppBar from './TopAppBar';
import TabsBuilder from './tabsBuilder/TabsBuilder'
import Logo from '../logo/Logo'

const useStyles = theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3.1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2.4em"
    }
  },
});
class AppHeader extends Component {

  rednderDrawer() {
    return (
      <React.Fragment>
        <Hidden smDown>
          <TabsBuilder />
        </Hidden>
        <Hidden smUp>
          <DrawerBuilder />
        </Hidden>
      </React.Fragment>
    )
  }
  renderLogo(){
   return <Hidden smDown>   <Logo /> </Hidden>
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="fixed"  >
          <Grid container  >
            <Grid item container>
              <TopAppBar />
            </Grid>
            <Grid item container>
              <Container maxWidth="lg" >
                <Toolbar disableGutters >
                  <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item>
                     {this.renderLogo()}
                    </Grid>
                    <Grid item >
                      {this.rednderDrawer()}
                    </Grid>
                  </Grid>
                </Toolbar>
              </Container>
            </Grid>
          </Grid>
        </AppBar>
        <div className={classes.toolbarMargin} />
      </React.Fragment>
    )


  }
}

export default (withTheme(withStyles(useStyles)(AppHeader)));




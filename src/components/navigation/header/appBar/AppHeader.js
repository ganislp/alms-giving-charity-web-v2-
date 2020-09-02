import React, { Component } from 'react';
import { AppBar, Toolbar, Grid, Container, Hidden  } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import DrawerBuilder from './drawer/DrawerBuilder'
import TopAppBar from './TopAppBar';
import TabsBuilder from './tabsBuilder/TabsBuilder'
import Logo from '../logo/Logo';

const useStyles = theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.2em"
    },
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "4em"
    // },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.3em"
    }
  },

  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
});
class AppHeader extends Component {

  rednderDrawer() {
    return (
      <React.Fragment>    
        <Hidden smDown>   
          <TabsBuilder /> 
          </Hidden>  
          
          <Hidden mdUp>   
          <DrawerBuilder  />
          </Hidden>     
      </React.Fragment>
    )
  }
  renderLogo(){
   return    <Logo /> 
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="fixed"  className={classes.appbar}>
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
            
                    {/* <Hidden smUp>
                    <Grid item container>
                      {this.rednderDrawer()}
                    </Grid>
                    </Hidden> */}
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


export default  (withTheme(withStyles(useStyles)(AppHeader)));




import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import HeroSectionView from '../Hero/HeroSectionView';
import HeroCardsView from '../HeroCard/HeroCardsView';
import { Grid } from '@material-ui/core';

const useStyles = theme => ({
  mainContainer:{
    marginTop:"5em",marginBottom:"5em",
    [theme.breakpoints.down("md")]: {
     marginTop:"0em",marginBottom:"0em",
   },
  }
})
class Home  extends React.Component{

 

  render(){
    const { classes } = this.props; 
    return(
     <React.Fragment>
       <HeroSectionView/>
       <Grid container className={classes.mainContainer}>
       <HeroCardsView/>
       </Grid>
       </React.Fragment>
    )
  }
}

export default  (withTheme(withStyles(useStyles)(Home)));
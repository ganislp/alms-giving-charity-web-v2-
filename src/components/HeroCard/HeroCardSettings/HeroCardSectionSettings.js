import React from 'react';
import { Container,Grid } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import HeroCardSectionList from './HeroCardSectionList';
import HeroCardImagesList from './HeroCardImagesList';

const useStyles = theme => ({
  mainContainer: {

    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },


});
class HeroCardSectionSettings extends React.Component{
 

  render(){
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer} >
<Grid  container >
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
  <HeroCardSectionList/>
  </Grid>
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
  <HeroCardImagesList/>
  </Grid>
    </Grid>   
  </Container>
    )
  }
}



export default (withTheme(withStyles(useStyles)(HeroCardSectionSettings)));
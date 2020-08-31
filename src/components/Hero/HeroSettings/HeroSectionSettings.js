import React from 'react';
import { Container,Grid } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import HeroSectionList from './HeroSectionList';
import HeroImagesList from './HeroImagesList'

const useStyles = theme => ({
  mainContainer: {
    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },


});
class HeroSectionSettings extends React.Component{
  rednderHeroSectionList(){
      return <HeroSectionList/>
  }
  rednderHeroImageList(){
      return <HeroImagesList/>
  
  }
  render(){
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer} >
<Grid  container spacing={6}>
  <Grid item sm={12}>
{this.rednderHeroSectionList()}
  </Grid>
  <Grid item sm={12}>
  {this.rednderHeroImageList()}
  </Grid>
    </Grid>   
  </Container>
    )
  }
}



export default (withTheme(withStyles(useStyles)(HeroSectionSettings)));
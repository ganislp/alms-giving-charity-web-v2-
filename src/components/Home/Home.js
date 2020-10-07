import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import HeroSectionView from '../Hero/HeroSectionView';
import HeroCardsView from '../HeroCard/HeroCardsView';
import AboutUsSectionView from '../Aboutus/AboutUsSectionView';
import UpComingEventsView from '../UpComingEvents/UpcomingEventsView'
import FeaturedCauseView from '../FeaturedCause/FeaturedCauseView';
import { Grid ,Container} from '@material-ui/core';
import OurCausesImageSlider from '../OurCauses/OurCausesImageSlider';
import CausesStatsViewView from '../CausesStats/CausesStatsView'


const useStyles = theme => ({
  mainContainer:{
    marginBottom:"5em",
    [theme.breakpoints.down("md")]: {
     marginTop:"0em",marginBottom:"3em",
   },
  },
 subContainer:{
    marginBottom:"5em",
    [theme.breakpoints.down("md")]: {
     marginTop:"0em",marginBottom:"0em",
   },
  },
  paper: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.common.bgColour,    
  },
})
class Home  extends React.Component{

 

  render(){
    const { classes,theme } = this.props; 
    return(
     <React.Fragment>
       <HeroSectionView/>
       <Grid container className={classes.mainContainer}>
       <HeroCardsView/>
       </Grid>
       <Grid container className={classes.mainContainer}>
       <AboutUsSectionView/>
       </Grid>   
       <Container maxWidth="lg"   className={classes.mainContainer}>
     <Grid container >
     <Grid item xs={12} sm={6}>
     <UpComingEventsView/>
     </Grid>
     <Grid item xs={12} sm={6} style={{backgroundColor:theme.palette.common.bgColour}}>
     {/* <FeaturedCauseView/> */}
</Grid>
     </Grid>
         </Container>  
         <Grid container className={classes.mainContainer}>
         <OurCausesImageSlider/>
         </Grid>

         <Grid container className={classes.mainContainer}>
       <CausesStatsViewView/>
       </Grid>   
       </React.Fragment>
    )
  }
}

export default  (withTheme(withStyles(useStyles)(Home)));
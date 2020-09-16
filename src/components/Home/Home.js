import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import HeroSectionView from '../Hero/HeroSectionView';
import HeroCardsView from '../HeroCard/HeroCardsView';
import AboutUsSectionView from '../Aboutus/AboutUsSectionView';
import UpComingEventsView from '../UpComingEvents/UpcomingEventsView'
import { Grid ,Container} from '@material-ui/core';
import history from '../../history';
import { SettingButton } from '../ui/Buttons';

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
  }
})
class Home  extends React.Component{

  renderSettingLargeButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="large" click={() => history.push("/upComingEvents/upComingEventsSettings")}></SettingButton>
    }
  }

  renderSettingSmallButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="small" click={() => history.push("/upComingEvents/upComingEventsSettings")}></SettingButton>
    }
  }

  render(){
    const { classes } = this.props; 
    return(
     <React.Fragment>
       <HeroSectionView/>
       <Grid container className={classes.mainContainer}>
       <HeroCardsView/>
       </Grid>
       <Grid container className={classes.mainContainer}>
       <AboutUsSectionView/>
       </Grid>   
       <Container maxWidth="lg"   >
       <Grid container >
         <Grid item   sm={6} xs={12}>
        <UpComingEventsView/>
         </Grid>
         <Grid item   sm={6} xs={12}>
         test
         </Grid>
         </Grid>
         </Container>  
       </React.Fragment>
    )
  }
}

export default  (withTheme(withStyles(useStyles)(Home)));
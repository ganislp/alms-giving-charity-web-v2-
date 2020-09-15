import React from 'react';
import { Container,Grid } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
// import UpComingEventsList from './UpComingEventsList';
import UpComingEventsImagesList from './UpComingEventsImagesList';

const useStyles = theme => ({
  mainContainer: {

    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },


});
class UpComingEventsSettings extends React.Component{
 

  render(){
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer} >
<Grid  container >
  {/* <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
  <UpComingEventsList/>
  </Grid> */}
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
  <UpComingEventsImagesList/>
  </Grid>
    </Grid>   
  </Container>
    )
  }
}



export default (withTheme(withStyles(useStyles)(UpComingEventsSettings)));
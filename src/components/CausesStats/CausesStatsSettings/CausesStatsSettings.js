import React from 'react';
import { Container,Grid } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import CausesStatsList from './CausesStatsList';
import CausesStatsImagesList from './CausesStatsImagesList';
import CausesStatsViewList from './CausesStatsViewList'

const useStyles = theme => ({
  mainContainer: {

    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },


});
class CausesStatsSettings extends React.Component{
  rednderCausesStatsList(){
      return <CausesStatsList/>
  }
  rednderCausesStatsImageList(){
      return <CausesStatsImagesList/>
  
  }
  render(){
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer} >
<Grid  container >
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
{this.rednderCausesStatsList()}
  </Grid>
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
  <CausesStatsViewList/>
  </Grid>
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
  {this.rednderCausesStatsImageList()}
  </Grid>
    </Grid>   
  </Container>
    )
  }
}



export default (withTheme(withStyles(useStyles)(CausesStatsSettings)));
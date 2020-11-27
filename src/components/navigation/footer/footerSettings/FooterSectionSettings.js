import React from 'react';
import { Container,Grid } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import FooterBgImageList from './FooterBgImageList'

const useStyles = theme => ({
  mainContainer: {

    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },


});
class FooterSectionSettings extends React.Component{

  rednderFooterImageList(){
      return <FooterBgImageList/>
  
  }
  render(){
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer} >
<Grid  container >
  <Grid item sm={12} style={{marginBottom:"1em",marginTop:"1em"}}>
{this.rednderFooterImageList()}
  </Grid>
    </Grid>   
  </Container>
    )
  }
}



export default (withTheme(withStyles(useStyles)(FooterSectionSettings)));
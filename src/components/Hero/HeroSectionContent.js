import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Typography,Hidden } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import history from '../../history';
import {HeaderButton,SettingButton} from '../ui/Buttons'

const useStyles = theme => ({

  imageConatiner:{
    backgroundImage: (props) => `url(${props.imageUrl})`,
    width:"100%",
    height: "100vh",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",   
   [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  },


   paper: {
    flexGrow: 1,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0, 0.5)",
    position: "relative",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      alignItems:"flex-start",
    },   
  },
  
  settingsContainer:{
    backgroundColor:theme.palette.common.blue
  },


  itemContainer:{
   paddingLeft:"16px",
    paddingTop:"1em",
    paddingBottom:"2em",
  },

  heading: {
    marginBottom: "0.1em",
    ...theme.palette.typography.h1,
   // fontWeight: 700,
    fontSize: "6rem",
    [theme.breakpoints.down("sm")]: {
      fontSize:"3rem",
   }, 
 
  },

  subHeading: {
   marginBottom: "0.5em",
    ...theme.palette.typography.h1,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize:"1rem",
  marginBottom:"1em",
   } ,
  },

  body: {
    ...theme.palette.typography.body,
    maxWidth:"40em",
 
   
  marginBottom:"2em",    
    [theme.breakpoints.down("md")]: {
     maxWidth:"30em",
    marginBottom:"1em",    
   } ,  
  },

  
})

class HeroSectionContent extends React.Component {


  renderHeroContent() {  
    const { classes } = this.props;   
    const activeHeroDetails = Object.assign({}, ...Object.values((this.props.heroDetails.filter(hero => hero.active === true))));
    return (
   
      <Grid container  className={classes.imageConatiner} >
        <Grid item className={classes.paper}   container justify="flex-end" >                      
          <Container maxWidth="lg"  disableGutters>
            <Grid container  justify="space-between" alignItems="center">
              <Grid item  className={classes.itemContainer}>
                <Typography variant="h1" color="primary" className={classes.heading}>
                  {activeHeroDetails.heading}
                </Typography>

                <Typography variant="h1" color="primary" className={classes.subHeading} >
                  {activeHeroDetails.subHeading}
                </Typography>

                <Hidden xsDown>           
                <Typography variant="body1" color="primary" className={classes.body}>
                  {activeHeroDetails.body}
                </Typography>
              </Hidden>
              <HeaderButton label="Donate Now"/>
                <HeaderButton  label="Read More"/>
              </Grid> 
                           
              <Hidden  lgUp>
          <Grid item  >
          <SettingButton size = "small" click = {() => history.push("/settings/heroSettings/heroCreate")}></SettingButton>
          </Grid>
          </Hidden>
</Grid>
          </Container>
          <Hidden mdDown>
          <Grid item     >
          <SettingButton size = "large" click = {() => history.push("/settings/heroSettings/heroCreate")}></SettingButton>
          </Grid>
          </Hidden>
          </Grid>
         
        </Grid>
 
    )
  }

  render() {

   
    return this.renderHeroContent()
  }
}



const mapStateToProps = state => {
  return {
    heroDetails: Object.values(state.heroSection.heroDetails),
  };
};
export default connect(mapStateToProps)(withTheme(withStyles(useStyles)(HeroSectionContent)));
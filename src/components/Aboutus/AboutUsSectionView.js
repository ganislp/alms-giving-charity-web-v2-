import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid, Container, Hidden,Typography } from '@material-ui/core';
import {HeaderButton,SettingButton} from '../ui/Buttons'
import {LoadingProcess,SubmitProcess} from '../ui/ProgressBars'
import history from '../../history';


const useStyles = theme => ({
  imageConatiner:{
    backgroundImage:  (props) => `url(${props.aboutUsBackround.imageUrl})`,
    width:"100%",
    //height: "100vh",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",  
    verticalalign: "baseline" ,  
   [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  },
  paper: {
    flexGrow: 1,
    width: "100%",
   // height: "100vh",
    backgroundColor: "rgba(0,0,0, 0.8)",
    position: "relative",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      alignItems:"flex-start",
    },   
  },

  heading: {
    marginBottom: "1em",
    padding:"0px",
    ...theme.palette.typography.h1,
   // fontWeight: 700,
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize:"1.5rem",
   }, 
 
  },
//   body: {
//     ...theme.palette.typography.body,
//     color:theme.palette.common.lightGrey,
//     maxWidth:"40em",
//    // fontWeight: 500,
//  // marginBottom:"2em",    
//     [theme.breakpoints.down("md")]: {
//     maxWidth:"0em",
//     marginBottom:"1em",    
//    } ,  
//   },

  bodyContaner:{
   // maxWidth:"40em",
      fontSize:"1rem",
     color:theme.palette.common.lightGrey,
      lineHeight: 2,
      paddingBottom:"1em",
     // paddingRight:"2em",
      [theme.breakpoints.down("md")]: {
    
        fontSize:"0.8rem",
      //  maxWidth:"40em",
         },  
  },
  
  itemContainer:{
 // paddingTop:"5em",
 paddingBottom:"3em",
  [theme.breakpoints.down("md")]: {
    paddingBottom:"2em",

     },  
  },
  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width:"100%",
    height: "50vh",
    verticalalign: "baseline" , 
    [theme.breakpoints.down("md")]: {
      height: "auto",
       },  
  },
  iconContainer:{
   // marginTop:"1em",
    [theme.breakpoints.down("md")]: {
    paddingBottom:"1em"
       },
  }
  
})

class AboutUsSectionView extends React.Component {

  render(){
    const { classes } = this.props;
    
    return(
      <Grid  className={classes.imageConatiner} container>
         <Grid item className={classes.paper}  container  justify="center" >
         <Hidden mdDown>   
          <Grid item  container  justify="flex-end" >
          <SettingButton size = "large" click = {() => history.push("/aboutus/aboutUsSectionSettings")}></SettingButton>
          </Grid>
          </Hidden>
         <Hidden  lgUp>
          <Grid item   container  justify="flex-end" className={classes.iconContainer}>
          <SettingButton size = "small" click = {() => history.push("/aboutus/aboutUsSectionSettings")}></SettingButton>
          </Grid>
          </Hidden>
         
        
          <Container maxWidth="lg" className={classes.itemContainer}>
<Grid  container   justify="space-between" spacing={2}>
<Grid item xs={12} sm={6}>

<Grid item container direction="column" >

          <Grid item xs={12}>
            <Typography variant="h1" color="primary" className={classes.heading}  >
              {this.props.aboutUsDetails.heading}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="primary" gutterBottom className={classes.bodyContaner} >
              {this.props.aboutUsDetails.body}
            </Typography>
          </Grid>
          <Grid item container justify="flex-start" style={{marginBottom:"1em"}}>
          <HeaderButton  label="Read More"/>
          </Grid>
        </Grid>   
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={this.props.aboutUsImage.imageUrl}
            alt={this.props.aboutUsImage.fileName} className={classes.img}></img>     
        </Grid>
        
        </Grid>
        
        </Container>
       
        </Grid>
        
      </Grid>
    )
  }

}
const mapStateToProps = state => {
  console.log("state",state);
  return {
    aboutUsDetails: _.pick(...Object.values(state.aboutUsSection.aboutUsDetails).filter(item => item.active === true),'heading','body'),
    aboutUsBackround: _.pick(...Object.values(state.aboutUsSection.aboutUsImages).filter(item => item.active === true && item.backround === true),'imageUrl','fileName'),
    aboutUsImage: _.pick(...Object.values(state.aboutUsSection.aboutUsImages).filter(item => item.active === true && item.backround === false),'imageUrl','fileName'),
    isLoading: _.some(_.values(state.pendingStates.GET_ABOUT_US)),
  };
};

export default connect(mapStateToProps, {})(withTheme(withStyles(useStyles)(AboutUsSectionView)));
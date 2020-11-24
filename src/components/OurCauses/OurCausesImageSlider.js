import React, { useState } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {Grid,IconButton,Typography,LinearProgress,Container,Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import ItemsCarousel from 'react-items-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OueCausesCardView from './OueCausesCardView';
import {SettingButton} from '../ui/Buttons';
import history from '../../history';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%",
    backgroundColor:"rgba(255,255,255, 0.8)"
  },

  slideItemContainer:{
    paddingRight:"15em",
    paddingLeft:"15em",
    marginRight: "auto",
   marginLeft: "auto",
   [theme.breakpoints.down("md")]: {
    paddingRight:"0em",
    paddingLeft:"0em",

   },
  },

  mainh3:{
    fontSize:"2.5em",
    paddingBottom:"1em",
    paddingTop:"1em",
    fontWeight:600,
    [theme.breakpoints.down("md")]: {
      fontSize:"1.5em",
     },
  },

  spenH1TextUnderLine:{
    display:"inline-block",
    borderBottom:"5px solid #0B72B9",
    borderColor:theme.palette.common.blue,
    paddingBottom:"0.4em"
  },
  learnButton: {
    ...theme.typography.learnButton
  },

  rightIconContainer: {
    padding: "1em",
    backgroundColor:theme.palette.common.blue,
    marginLeft:"5em",
    color:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color:  theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft:"-3em",
      padding: "0.5em",
     },
  },

 leftIconContainer: {
    padding: "1em",
    backgroundColor:theme.palette.common.blue,
    marginRight:"5em",
    color:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color:  theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]: {
      marginRight:"-3em",
      padding: "0.5em",
     },
  },

 
}))


 const OurCausesImageSlider = (props) => {
  const theme = useTheme();
  const classes = useStyles();
   const matchesMdd = useMediaQuery(theme.breakpoints.down("md"));
   const matchesxsd = useMediaQuery(theme.breakpoints.down("xs"));
const [activeItemIndex, setActiveItemIndex] = useState(0);
const chevronWidth = 20;
  const styles = {
      backgroundImage: `url(${props.ourCausesImageBackground.imageUrl})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "auto",
      width: "100%",
  }

if(!_.isEmpty(props.ourCausesDetails) && props.isLoading){
  return <LinearProgress color="secondary"/>
 }
  return(
    
    <Grid  style={{...styles}}  container justify="center" >
       
    <Grid item className={classes.paper} container  justify="flex-end" alignItems="center">  
    {/* <Hidden  lgUp>
          <Grid item   style={{backgroundColor:"red"}} >
          <SettingButton size = "small" click = {() => history.push("/ourCauses/ourCausesSectionSettings")}></SettingButton>
          </Grid>
          </Hidden>

          <Hidden mdDown>
          <Grid item     >
          <SettingButton size = "large" click = {() => history.push("/ourCauses/ourCausesSectionSettings")}></SettingButton>
          </Grid>
          </Hidden> */}
     
    <Grid container className={classes.slideItemContainer} justify="center" alignItems="center">   
<Container maxWidth="lg" >
    <Grid item container justify="flex-start">
       <Typography variant="h3" className={classes.mainh3}>
       <span className={classes.spenH1TextUnderLine}>Our</span> Causes
       </Typography>
       </Grid>
       <Grid item   xs={12}>
         
       <ItemsCarousel
    requestToChangeActive={setActiveItemIndex}
    activeItemIndex={activeItemIndex}
    numberOfCards={matchesxsd ? 1 : matchesMdd ? 2 : 3}
    gutter={10}
    leftChevron={matchesMdd ? null : <IconButton  className={classes.leftIconContainer} size="medium" disableRipple>
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton> }
 rightChevron={matchesMdd ? null : <IconButton  className={classes.rightIconContainer} size="medium" disableRipple >
 <ArrowForwardIosIcon fontSize="inherit" />
</IconButton> }
    outsideChevron
    chevronWidth={chevronWidth}
  >
   
{props.ourCausesDetails.map((item,index) => (
 <OueCausesCardView
  imageUrl={item.imageUrl} 
  imgname={item.fileName}
  key={`${item.fileName} ${index}`} 
  heading={item.heading}
  body={item.body}
  foundGoal={item.foundGoal}
  foundRaised={item.foundRaised}
  />
))}
       </ItemsCarousel>  
           
      </Grid>
      </Container>
   </Grid>

      </Grid>
      
   </Grid>  
 
 

 
  )
}

const mapStateToProps = (state) => {
  return {
    ourCausesDetails:  Object.values(state.ourCausesSection.ourCausesDetails),  
    ourCausesImageBackground:   _.pick(...Object.values(state.ourCausesSection.ourCausesImages).filter(item => item.backround === true && item.active === true),'imageUrl'), 
    isLoading: _.some(_.values(state.pendingStates.FETCH_OUR_CAUSES_IMAGES)) 
    || _.some(_.values(state.pendingStates.GET_OUR_CAUSES)) ,

  };
};
export default connect(mapStateToProps)(OurCausesImageSlider);
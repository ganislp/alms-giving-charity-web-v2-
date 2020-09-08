import React, { useState } from 'react';
import { connect } from 'react-redux';
import ItemsCarousel from 'react-items-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HeroSectionContent from './HeroSectionContent';
 
const useStyles = makeStyles(theme => ({
 
  rightIconContainer: {
    padding: "1em",
  backgroundColor: theme.palette.common.blue,
  color:theme.palette.common.white,
    marginLeft:"-10em",
    [theme.breakpoints.down("md")]: {
      padding: "0.5em",
      marginLeft:"-3em",
    }
  },

 leftIconContainer: {
    padding: "1em",
    backgroundColor: theme.palette.common.blue,
    color:theme.palette.common.white,
    marginRight:"-10em",
    [theme.breakpoints.down("md")]: {
      padding: "0.5em",
      marginRight:"-3em",
    }
  },
}))

const HeroSectionView = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("xs"));
   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;


   return(
    <ItemsCarousel
    requestToChangeActive={setActiveItemIndex}
    activeItemIndex={activeItemIndex}
    numberOfCards={1}
    gutter={0}
    leftChevron={matchesMD ? null :<IconButton  className={classes.leftIconContainer} size="medium" >
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>}
  rightChevron={matchesMD ? null :<IconButton  className={classes.rightIconContainer} size="medium">
  <ArrowForwardIosIcon fontSize="inherit" />
</IconButton>}
    outsideChevron
    chevronWidth={chevronWidth}
  >
   
{props.heroImages.map((image,index) => (
 <HeroSectionContent
  imageUrl={image.imageUrl} 
  imgname={image.fileName}
  key={`${image.fileName} ${index}`} 

  />
))}

       </ItemsCarousel> 
   )
 }
 const mapStateToProps = state => {
   return {
     heroImages:  Object.values(state.heroSection.heroImages).filter(image => image.active === true),
   };
 };
 export default connect(mapStateToProps)(HeroSectionView);
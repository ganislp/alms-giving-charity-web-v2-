import React from 'react';
import {Typography,Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import history from '../../history';
import { SettingButton } from '../ui/Buttons';


const useStyles = makeStyles(theme => ({
  h2MainContainer:{
    ...theme.palette.typography.h2,
    marginBottom:"1em",
       [theme.breakpoints.down("md")]: {
         fontSize:'2rem',
         marginBottom:"1em",
       } 
     },
     itemContainer:{
      marginBottom:"3em",
      [theme.breakpoints.down("md")]: {
        marginBottom:"2em",
      } 
    },
    icon: {
     // position: "relative",
      top: theme.spacing.unit,
      // width: theme.typography.display1.fontSize,
      // height: theme.typography.display1.fontSize
  }
}))



export const Heading = (props) => {

 const renderSettingSmallButton = () => {
      return <SettingButton size="small" click={() => history.push("/upComingEvents/upComingEventsSettings")}></SettingButton>
   
  }

  const classes = useStyles();
  return (
  <Grid container justify="space-between" >
<Grid item>
<Typography variant="h2"    className={classes.h2MainContainer} >
{props.heading}
      </Typography>
</Grid>
   <Grid item >
            {renderSettingSmallButton()} 
              </Grid>
  </Grid>
  )
 
}


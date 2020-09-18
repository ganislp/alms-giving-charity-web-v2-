import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import { useTheme,makeStyles } from '@material-ui/core/styles';
import { HeaderButton} from '../ui/Buttons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles(theme => ({

mainContainer:{
 paddingTop:"2em",
paddingLeft:"1em",
  [theme.breakpoints.down("md")]: {
    padding:"1em"
  } 
}
  
}))

export default function FeaturedCauseBuild(props){
  const theme = useTheme();
  const classes = useStyles();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  return(
  
      <Grid container   justify="flex-start"  className={classes.mainContainer} spacing={3}>
        <Grid item xs={12} sm={6} container >
        <img src={props.imageUrl} alt={props.fileName} width="100%"></img>
        </Grid>
        
        <Grid item  xs={12} sm={6} >
          <Grid item container    >
          <Grid item   >
        <Typography variant="h3" style={{...theme.palette.typography.h3,paddingBottom:"0.5em"}} >
            {props.heading}
            </Typography>
            </Grid>
            <Grid item  >
        <Typography variant="subtitle1"    style={{...theme.palette.typography.subtitle1,paddingBottom:"1em"}} >
          {`${props.eventDate}  |  ${props.location} `}
            </Typography>
            </Grid>
            <Grid item  >
        <Typography variant="body1"  style={{...theme.palette.typography.body1,paddingBottom:matchesXS ? "1em ": "5em"}} >
            {props.body}
            </Typography>
            </Grid>  
            <Grid item   >
            <HeaderButton label="Donate Now"/>
              </Grid>
        </Grid>
        </Grid>
        
       
          
        </Grid>


      
  )
}





import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ReadMoreOutLinedButton} from '../ui/Buttons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// const useStyles = makeStyles(theme => ({
//   h3container:{
//     ...theme.palette.typography.h3,
//   },

  
// }))

export default function UpComingEventsBuild(props){
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return(
  
      <Grid container  justify="flex-start"  spacing={matchesXS ? 1 : 4}>
        
        <Grid item xs={12} sm={3}>
         <img src={props.imageUrl} alt={props.fileName} width="100%"></img>
        </Grid>
        
        <Grid item  xs={12} sm={9}>
          <Grid item container direction="column" justify="flex-start" alignItems="flex-start">
          <Grid item   >
        <Typography variant="h3" style={{...theme.palette.typography.h3,}} gutterBottom>
            {props.heading}
            </Typography>
            </Grid>
            <Grid item  >
        <Typography variant="subtitle1"   gutterBottom style={{...theme.palette.typography.subtitle1,}} >
          {`${props.eventDate}  |  ${props.location} `}
            </Typography>
            </Grid>
            <Grid item  >
        <Typography variant="body1"  style={{...theme.palette.typography.body1,}} >
            {props.body}
            </Typography>
            </Grid>  
            <Grid item  style={{ paddingBottom: matchesXS ? "1em" : "0em"}}>
              <ReadMoreOutLinedButton label="Read More"/>
              </Grid>
        </Grid>
        </Grid>
     
          
        </Grid>


      
  )
}





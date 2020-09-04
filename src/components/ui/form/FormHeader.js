import React from 'react';
import {  Grid, Paper, Typography, } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { HomeHeaderButtonPrimary } from '../../ui/Buttons';

const useStyles = makeStyles(theme => ({
  paperHeader: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.common.blue,
  
  },


  loginpaperHeader: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: blue[500],
   color: theme.palette.common.grey,
   borderTop: 5, 
   borderTopColor: theme.palette.common.white,
   borderTopStyle: 'solid',
   borderTopLeftRadius:0,
   borderTopRightRadius:0,
   borderRadius: 0,
   
  },

  h6Heading: {
    ...theme.palette.typography.h6White,
    paddingLeft: "0.3em",
    paddingRight: "0.3em",
    [theme.breakpoints.down("md")]: {

    }
  },
   
   }))


   export const   FormHeader = (props) => {
  const classes = useStyles();

  return <Paper className={classes.paperHeader} square={true} >
  <Grid container alignItems="center" justify="space-between">
  <Grid item >
    <HomeHeaderButtonPrimary/>
    </Grid>
    <Grid item>
      <Typography variant="h6" align="center"
        className={classes.h6Heading} >{props.label}</Typography>
        
    </Grid>
   
    <Grid item >
     {props.children}
    </Grid>
  </Grid>
</Paper>
}

export const   LoginHeader = (props) => {
  const classes = useStyles();
  return(
<React.Fragment>

  <Paper className={classes.loginpaperHeader} >
  <Grid container alignItems="center" justify="space-between">
    <Grid item>
      <Typography variant="h6" align="center"
        className={classes.h6Heading} >{props.label}</Typography>
    </Grid>
  </Grid>
</Paper>
</React.Fragment>
)
}

// export default FormHeader;
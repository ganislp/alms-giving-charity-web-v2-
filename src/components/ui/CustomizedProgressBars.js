import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  
  
  containerStyles :{
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    //margin: 50
  },

  fillerStyles :{
    height: '100%',
    width: props =>  `${props.completed}%`,
    backgroundColor: theme.palette.common.blue,
    borderRadius: 'inherit',
    textAlign: 'right'
  },
  labelStyles :{
 padding: 5,
    color: 'white',
   // fontWeight: 'bold'
  }
}));

export default function CustomizedProgressBars(props) {
  const classes = useStyles();

  return (
    <Grid  className={classes.containerStyles} item container sm={12}>
      <Grid item className={classes.fillerStyles} >
      <span className={classes.labelStyles} >
      
       {`${props.completed}%`}
        </span>
      </Grid>
      
    </Grid>
  );
}

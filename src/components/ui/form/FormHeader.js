import React from 'react';
import {  Grid, Paper, Typography, } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paperHeader: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.common.blue,

  },

  h6Heading: {
    ...theme.palette.typography.h6White,
    paddingLeft: "0.3em",
    paddingRight: "0.3em",
    [theme.breakpoints.down("md")]: {

    }
  },
   
   }))


const FormHeader = (props) => {
  const classes = useStyles();
  return <Paper className={classes.paperHeader}>
  <Grid container alignItems="center" justify="space-between">
    <Grid item>
      <Typography variant="h6" align="center"
        className={classes.h6Heading}>{props.label}</Typography>
    </Grid>
    <Grid item >
     {props.children}
    </Grid>
  </Grid>
</Paper>
}

export default FormHeader;
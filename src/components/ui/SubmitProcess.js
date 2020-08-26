import React from 'react';
import {LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[500],
    },
  },
}))


const SubmitProcess = () => {
  const classes = useStyles();
  return <LinearProgress className={classes.buttonSuccess} />
}

export default SubmitProcess;
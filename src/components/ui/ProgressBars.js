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

export const SubmitProcess = (props) => {
  const classes = useStyles();
  return props.isSubmiting ? <LinearProgress className={classes.buttonSuccess} /> : null
}

export const LoadingProcess = (props) => {
  const classes = useStyles();
  return props.isLoading ? <LinearProgress className={classes.buttonSuccess} /> : null
}
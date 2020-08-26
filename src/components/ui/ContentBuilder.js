import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import SubmitProcess from './SubmitProcess';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  mainContainer: {
    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },
}))

const ContentBuilder = (props) => {

  const renderSubmitProcess = () => {
    if (props.isSubmiting) {
      return <SubmitProcess/>
    }

  }
  const classes = useStyles();
  return(
    <Container maxWidth="lg" className={classes.mainContainer}>
        <Paper className={classes.root} >
        {renderSubmitProcess()}
          {props.children}
          {renderSubmitProcess()}
        </Paper>
      </Container>
  )
}

export default ContentBuilder;
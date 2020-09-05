import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, } from '@material-ui/core';
// import SubmitProcess from './SubmitProcess';
import {SubmitProcess} from '../ui/ProgressBars'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  mainContainer: {
   paddingTop: "2em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "1em",
    }
  },
}))

const ContentBuilder = (props) => {

  // const renderSubmitProcess = () => {
  //   if (props.isSubmiting) {
  //     return <SubmitProcess/>
  //   }

  // }
  const classes = useStyles();
  return(
    <Container maxWidth="lg" className={classes.mainContainer} >
      
        <Paper className={classes.root} >
        <SubmitProcess isSubmiting={props.isSubmiting}/>
          {props.children}
          <SubmitProcess isSubmiting={props.isSubmiting}/>
        </Paper>
       
      </Container>
    
  )
}

export default ContentBuilder;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button, IconButton,Typography, Grid } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { useTheme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Edit from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import history from '../../history';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles(theme => ({
  submitButton: {
    ...theme.palette.typography.SubmitButton
  },

  headerButton: {
    ...theme.palette.typography.SubmitButton,
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.grey,
      color: theme.palette.common.white,
    },

  },
  loginButton: {
    ...theme.palette.typography.SubmitButton,
    // backgroundColor: theme.palette.common.b,
    color: theme.palette.common.white,
    "&:hover": {
      // backgroundColor: theme.palette.common.grey,
      color: theme.palette.common.white,
    },

  },

  submitConButton: {
    backgroundColor: theme.palette.common.blue,
    border: "none",
    borderWidth: 0,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1rem",
    //marginRight: "1em",
    "&:hover": {
      backgroundColor: theme.palette.common.blue
    },
  },

  submitConButtonSpan: {
    marginRight: 5,
    marginLeft: 5,
  },

  contentButton: {
    ...theme.palette.typography.contentButtonMain,
     fontSize: "1.2rem",
     padding: "0.5em",
     marginRight:"2em",
     "&:hover": {
       backgroundColor: theme.palette.common.blue
     },

     [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
     marginRight:"0.5em",
      padding: "0.5em",
    },
     [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
     marginRight:"0.5em",
      padding: "0.5em",
    }
   },


   contentButtonSpan:{
    marginRight: 20, 
    marginLeft: 20,

  //   [theme.breakpoints.down("md")]: {
  //     marginRight: 15, 
  //     marginLeft: 15,
  //  } ,
 
    [theme.breakpoints.down("sm")]: {
      marginRight: 5, 
      marginLeft: 5,
   } ,
 
   },

   settingsContainer:{
    backgroundColor:theme.palette.common.blue,
padding:"0.5em",

   [theme.breakpoints.down("md")]: {
    padding:"0.3em"
 } ,
  },


}))

export const SubmitButton = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesXSD = useMediaQuery(theme.breakpoints.down("xs"));
  const renderButton = () => {
    if (matchesXSD) {
      return <IconButton aria-label="Submit"
        size="small" color="primary" type="submit" style={{ ...theme.palette.typography.IconButton }}>
        {!props.isEdit ?
          <Tooltip title="Add Company Details" arrow><SaveIcon fontSize="inherit" /></Tooltip> :
          <Tooltip title="Edit Company Details" arrow><Edit fontSize="inherit" /></Tooltip>
        }
      </IconButton>
    }
    else {
      return <Button variant="text" type="submit" color="primary"
        className={classes.submitButton}
        startIcon={!props.isEdit ?
          <Tooltip title="Add Company Details" interactive><SaveIcon /></Tooltip> :
          <Tooltip title="Edit Company Details" interactive><Edit /></Tooltip>
        } size="medium" >Submit
 </Button>
    }
  }


  return (
    <React.Fragment>
      {renderButton()}
    </React.Fragment>
  )
};


export const DonateButtonHeader = (props) => {
  const classes = useStyles();
  return (
    <Button variant="text" className={classes.headerButton}>Donate Now</Button>
  )

};

export const FormBackButton = (props) => {
  const theme = useTheme();
  return (
    <IconButton aria-label="Back"  onClick={history.goBack}
    size="medium" color="primary" style={{ ...theme.palette.typography.IconButton }}>
 <ArrowBackIcon fontSize="inherit" />
  </IconButton>
  )

};

export const FormBackHomeButton = (props) => {
  const theme = useTheme();
  return (
    <IconButton aria-label="Back"  onClick={() => history.push("/")}
    size="medium" color="primary" style={{ ...theme.palette.typography.IconButton }}>
 <ArrowBackIcon fontSize="inherit" />
  </IconButton>
  )

};

export const TableHeaderButton = (props) => {
  const theme = useTheme();

  const matchesXSD = useMediaQuery(theme.breakpoints.down("xs"));
  return (
  
      <Grid container justify={matchesXSD ? "center" : "flex-start"} alignItems="center" >
          {/* <Grid item>
    <IconButton aria-label="Back"  onClick={history.goBack}
    size="medium" color="secondary" style={{ ...theme.palette.typography.IconButton }}>
 <HomeIcon fontSize="inherit" />
  </IconButton>
  </Grid> */}
        <Grid item>
     <Typography variant="h6" color="secondary"> {props.label}</Typography>
     </Grid>
   
  </Grid>

  )

};

export const HomeHeaderButton = (props) => {
  const theme = useTheme();
  return (
    <IconButton aria-label="Back"  onClick={() => history.push("/")}
    size="medium" color="secondary" style={{ ...theme.palette.typography.IconButton }}>
 <HomeIcon fontSize="inherit" />
  </IconButton>
  )

};

export const HomeHeaderButtonPrimary = (props) => {
  const theme = useTheme();
  return (
    <IconButton aria-label="Back"  onClick={() => history.push("/")}
    size="medium" color="primary" style={{ ...theme.palette.typography.IconButton }}>
 <HomeIcon fontSize="inherit" />
  </IconButton>
  )

};


export const LoginButton = (props) => {
  const classes = useStyles();
  return (
    <Button variant="text" aria-describedby={props.id}
      className={classes.loginButton} onClick={(event) => props.onLoginPopClick(event)}>{props.buttonLabel}</Button>
  )

};

export const TextButton = (props) => {
  const classes = useStyles();
  return (
    <Button variant="text"
      className={classes.loginButton} onClick={ props.click}>{props.buttonLabel}</Button>
  )

};

export const SubmitContainedButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.submitConButton} variant="outlined" color="primary" type="submit" >
      <span className={classes.submitConButtonSpan}>{props.label}</span>
    </Button>
  )
};


export const HeaderButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.contentButton} variant="outlined" color="secondary" disableRipple disableFocusRipple>
      <span className={classes.contentButtonSpan}>{props.label}</span>
    </Button>
  )
};

export const SettingButton = (props) => {
  const classes = useStyles();
  return (
    <IconButton aria-label="settings" onClick={() => props.click()} style={{ padding:"0em"}}>             
    <SettingsIcon fontSize={props.size} color="primary" className={classes.settingsContainer} />         
  </IconButton>
  )
};




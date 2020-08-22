import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { useTheme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Edit from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  submitButton: {
    ...theme.palette.typography.SubmitButton
  },
}))



export const SubmitButton = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesXSD = useMediaQuery(theme.breakpoints.down("xs"));
  const renderButton = () => {
    if (matchesXSD) {
      return <IconButton aria-label="Submit" 
      size="small" color="primary"  type="submit" style={{...theme.palette.typography.IconButton}}>
        {props.isEdit ?
          <Tooltip title="Add Company Details" arrow><SaveIcon   fontSize="inherit"/></Tooltip> :
          <Tooltip title="Edit Company Details" arrow><Edit fontSize="inherit"   /></Tooltip>
        }
      </IconButton>
    }
    else {
      return <Button variant="text" type="submit" color="primary"
        className={classes.submitButton}
        startIcon={props.isEdit ?
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
}




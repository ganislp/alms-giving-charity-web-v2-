import React from 'react';

import {Button} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Edit from '@material-ui/icons/Edit';
   export const  SubmitButton = (props) => {
    const theme = useTheme();
return(
  <React.Fragment>
  <Button variant="outlined"  type="submit" color="primary"
   style={{...theme.typography.submitButton}} 
  startIcon={props.isEdit ? <SaveIcon /> :<Edit /> }  size="large" >Submit
    </Button>

  </React.Fragment>
)
}




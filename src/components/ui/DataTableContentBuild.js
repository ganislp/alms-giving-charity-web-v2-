import React from 'react';
import {IconButton,Typography, Grid,Avatar } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Edit from '@material-ui/icons/Edit';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import history from '../../history';
import UploadImages from '../ui/UploadImages';

// const useStyles = makeStyles(theme => ({


// }));

export const TableRowContent = (props) => {
return <Typography variant="body1" >{props.value}</Typography>
}

export const ActiveButtonContent = (props) => {
  return  <IconButton aria-label="Active" disabled={props.disabled} size="medium" disableRipple 
  onClick={() =>props.click(props.value,props.dataIndex)}>
    {props.value ?  <Tooltip title="Active"><Check fontSize="inherit" /></Tooltip> : <Tooltip title="inActive">
      <Clear fontSize="inherit" /></Tooltip>}
  </IconButton>
  }


  export const ActionButtonsContent = (props) => {
    return  <Grid container justify="flex-start" alignItems="flex-start" spacing={2}>
      
    <Grid item sm={6} hidden={props.hiddendEdit}>
    <Tooltip title="Edit">
  <IconButton aria-label="Edit"  size="medium" disableRipple style={{padding:"0"}} 
  onClick={() => history.push(`${props.edit}${props.value}`)}>
  <Edit fontSize="inherit" />
</IconButton>
</Tooltip>
</Grid>
   <Grid item sm={6}>
   
   <IconButton aria-label="delete" 
    disabled={props.dataIndex}  
   size="medium" disableRipple style={{padding:"0"}} 
   onClick={() =>props.click(props.value,props.fileName)}>
   <Tooltip title="Delete"><DeleteIcon fontSize="inherit" /></Tooltip>
 </IconButton>

 </Grid>

</Grid>
    }


    export const CreateButtonContent = (props) => {
      return    <Tooltip title={"custom icon"}>
      <IconButton  onClick={() => history.push(`${props.create}`)} style={{padding:"0"}}>
        <AddIcon fontSize="inherit"  />
      </IconButton>
    </Tooltip>
      }  
      
      export const UploadImage = (props) => {
        return    <Tooltip title={"custom icon"}>
        <IconButton  onClick={() => <UploadImages/>}>
          <AddIcon fontSize="inherit"  />
        </IconButton>
      </Tooltip>
        }  

            
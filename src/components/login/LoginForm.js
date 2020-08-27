import React from 'react';
import { Field,reduxForm } from 'redux-form';
import {Button,Grid} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {renderTextField,}   from '../ui/form/formFields';
import {validateLoginForm} from '../ui/form/validateForm'
import {LoginHeader}  from '../ui/form/FormHeader';
import {SubmitContainedButton} from '../ui/Buttons'

const useStyles = theme => ({

  gridContainer:{
    maxWidth:"15em",
    margin:"auto",
    paddingLeft:"1em",
    paddingRight:"1em"
  },

  itemTextField: {
    marginBottom: "0.5em",
   
  },


});

class LoginForm extends React.Component{

 

 

  onSubmit = formValues => {
   this.props.onSubmit(formValues)
  };

  render(){
    const { classes } = this.props;
    return(
      <form    
      onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <LoginHeader label="Sigin"/>
      <Grid container justify="center" alignItems="ceneter" className={classes.gridContainer}>
        <Grid item  xs={12} className={classes.itemTextField} style={{ marginTop: "0.5em",}}>
        <Field
              name="email"
              component={renderTextField}
              label="Email"
              fullWidth
            />
        </Grid>
        <Grid item xs={12} className={classes.itemTextField} >
          <Field
          name="password"
          component={renderTextField}
          type="password"
          label="Password"
          fullWidth
        />
        </Grid>
        
        <Grid item container justify="center" style={{margin:"1em"}}>
        <SubmitContainedButton label="SingIn"/>
</Grid>
        </Grid>
      </form>
    )
  }
}


const formWrapped=  reduxForm({
    form: 'loginForm',
    validate:validateLoginForm,
  })  (LoginForm);
  export default (withTheme(withStyles(useStyles)(formWrapped)));
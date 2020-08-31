import React from 'react';
import { connect } from 'react-redux';
import { Field,reduxForm } from 'redux-form';
import {Grid} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
 import {login} from '../../actions/api/authApi'
import {renderTextField,}   from '../ui/form/formFields';
import {validateLoginForm} from '../ui/form/validateForm';
import {LoginHeader}  from '../ui/form/FormHeader';
import {SubmitContainedButton} from '../ui/Buttons';
import { CircularProgress  } from '@material-ui/core';

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
   this.props.login(formValues)
  };
 
renderButtonLable(){
if(this.props.onSubmiting){
  return <CircularProgress size={25} color="primary"/>
}
else{
  return "SingIn "
}
}


  render(){
    const { classes } = this.props;
    return(
      <form    
      onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <LoginHeader label="Sigin"/>
      <Grid container justify="center"  className={classes.gridContainer}>
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
        <SubmitContainedButton label={this.renderButtonLable()} />
</Grid>
        </Grid>
      </form>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    onSubmiting: state.userDetails.onSubmiting
  }
 
}

const formWrapped=  reduxForm({
    form: 'loginForm',
    validate:validateLoginForm,
  })  (LoginForm);
  export default connect(mapStateToProps,{login})(withTheme(withStyles(useStyles)(formWrapped)));
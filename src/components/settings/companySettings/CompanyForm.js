import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { TextField, Grid, Paper, Typography, } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MuiPhoneNumber from "material-ui-phone-number";
import { SubmitButton } from '../../ui/Buttons';


const useStyles = theme => ({
  
  rootHeader: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.common.blue,
  },


  h6Heading: {
    ...theme.palette.typography.h6White,
    padding: "0.5em"
  },

  donateButton: {
    ...theme.typography.donateButton,
    color: theme.palette.common.white
  },

  itemTextField:{
    marginBottom:"1em",
    [theme.breakpoints.down("md")]: {
      marginBottom:"0.5em",

     },
  },
});
class CompanyForm extends React.Component {

  renderTextField({ label, input, meta: { touched, invalid, error }, ...custom }) {
    return (
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        color="secondary" 
        {...input}
        {...custom}
      />
    )
  }


  renderSelectField({ label, input, meta: { touched, error }, children, ...custom }) {
    return (
      <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">Country</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'country',
          id: 'age-native-simple'
        }}
      >
        {children}
      </Select>
    </FormControl>
    )
  }

 

  renderPhoneField({ label, input, meta: { touched, invalid, error }, ...custom }) {
    return (
      <MuiPhoneNumber
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        color="secondary" 
        defaultCountry={"za"}
        as={MuiPhoneNumber}
        {...input}
        {...custom}
      
      />
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
   
  };

  renderHeader(classes) {
 
    return (
      <Paper className={classes.rootHeader} >
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="h6" align="center"
              className={classes.h6Heading}> Create Company Details</Typography>
          </Grid>
          <Grid item>
            <SubmitButton isEdit={_.isEmpty(this.props.initialValues)}/>
          </Grid>
        </Grid>
      </Paper>

    )
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
        {this.renderHeader(classes)}
        <Grid container  style={{ padding: "1em" }} spacing={3}>
          <Grid item  className={classes.itemTextField} md={6} >
            <Field
              name="companyName"
              component={this.renderTextField}
              label="Company Name"
              fullWidth
            />
          </Grid>
          <Grid item className={classes.itemTextField} md={6}>
            <Field             
              name="email"
              component={this.renderTextField}
              label="Email"
              fullWidth
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true
              }}
            />
          </Grid>
          <Grid item className={classes.itemTextField} sm={6}>
            <Field
              name="phone"
              component={this.renderPhoneField}
              label="Phone Number"
              fullWidth         
            />
          </Grid>

          <Grid item  className={classes.itemTextField} sm={6}>
            <Field
              name="addressline1"
              component={this.renderTextField}
              label="Address Line 1"
              fullWidth
            />
          </Grid>

          <Grid item  className={classes.itemTextField} md={6}>
            <Field
              name="addressline2"
              component={this.renderTextField}
              label="Address Line 2"
              fullWidth
            />
          </Grid>
          <Grid item  className={classes.itemTextField} md={6}>
            <Field
              name="citytown"
              component={this.renderTextField}
              label="City / Town"
              fullWidth
            />
          </Grid>
          <Grid item  className={classes.itemTextField} md={6}>
            <Field
              name="province"
              component={this.renderTextField}
              label="State / Province / Region"
              fullWidth
            />
          </Grid>
          <Grid item  className={classes.itemTextField} md={6}>
            <Field
              name="zipcode"
              component={this.renderTextField}
              label="Zip / Postal Code"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item  className={classes.itemTextField} md={6}>
          <Field
          classes={classes}
          name="country"
          component={this.renderSelectField}
          label="Country" >
          <option value="" />
          <option value="south Africa">South Africa</option>
        </Field>
          </Grid>
  
        </Grid>
      </form>
    )
  }

}



const validate = values => {

 
  const errors = {}
  const requiredFields = [
    'companyName',
    'email',
    'phone',
    'addressline1',
    'addressline2',
    'citytown',
    'province',
    'zipcode',
    'country'
  ]
  requiredFields.forEach(field => {
    if (!values[field] ) {
      errors[field] = 'Required'
    }
  })

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (values.phone) {
 
    if(values.phone.length < 12){
      errors.phone = 'Invalid phone number'  
    }
  }

  return errors
}
export default reduxForm({
  form: 'companyForm', // a unique identifier for this form
  validate,
})(withTheme(withStyles(useStyles)(CompanyForm)));
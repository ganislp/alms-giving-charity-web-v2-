import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid,  Hidden } from '@material-ui/core';
import { SubmitButton } from '../../ui/Buttons';
import {FormHeader}  from '../../ui/form/FormHeader';
import {renderTextField,renderSelectField,renderPhoneField}   from '../../ui/form/formFields';
import {validateCompanyForm} from '../../ui/form/validateForm'

const useStyles = theme => ({
  mainContainer: {
    padding: "1em"
  },

  donateButton: {
    ...theme.typography.donateButton,
    color: theme.palette.common.white,
  },

  itemTextField: {
    marginBottom: "0.5em",
  },

  labelAsterisk: {
    color: "orange"
  }

});
class CompanyForm extends React.Component {

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <FormHeader label="Create Company">
        <SubmitButton isEdit={_.isEmpty(this.props.initialValues.companyName)}/>
        </FormHeader>
        <Grid container justify="center" className={classes.mainContainer} spacing={2}>
          <Grid item className={this.props.classes.itemTextField} xs={12} sm={6} >
            <Field
              name="companyName"
              component={renderTextField}
              label="Company Name"
              fullWidth/>
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              fullWidth/>
          </Grid>

          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="phone"
              component={renderPhoneField}
              label="Phone Number"
              fullWidth />
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="addressline1"
              component={renderTextField}
              label="Address Line 1"
              fullWidth/>
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="addressline2"
              component={renderTextField}
              label="Address Line 2"
              fullWidth/>
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="citytown"
              component={renderTextField}
              label="City / Town"
              fullWidth/>
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="province"
              component={renderTextField}
              label="State / Province / Region"
              fullWidth/>
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={6}>
            <Field
              name="zipcode"
              component={renderTextField}
              label="Zip / Postal Code"
              type="number"
              fullWidth />
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={12}>
            <Field
              name="country"
              component={renderSelectField}
              label="Country" >
              <option value="">Please Select Country</option>
              <option value="south Africa">South Africa</option>
            </Field>
          </Grid>
        </Grid>
        <Hidden smUp>
        <FormHeader label="Create Company">
        <SubmitButton isEdit={_.isEmpty(this.props.initialValues.companyName)} />
        </FormHeader>
        </Hidden>
      </form>
    )
  }

}

export default reduxForm({
  form: 'companyForm',
  validate:validateCompanyForm,
  enableReinitialize: true,
  destroyOnUnmount: false,

})(withTheme(withStyles(useStyles)(CompanyForm)));
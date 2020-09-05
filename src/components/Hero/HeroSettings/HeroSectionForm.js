import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Grid, } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {FormHeader}  from '../../ui/form/FormHeader';
import { SubmitButton} from '../../ui/Buttons';
import {renderTextField,}   from '../../ui/form/formFields';
import {validateHeroForm} from '../../ui/form/validateForm'

const useStyles = theme => ({
  mainContainer: {
    padding: "1em"
  },
  itemTextField: {
    marginBottom: "0.5em",
  },

});
class HeroSectionForm extends React.Component {

  onSubmit = formValues => {
    this.props.onSubmit(formValues);

  };

  render() {
    const { classes } = this.props;
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} >
         <FormHeader label="Create Hero Content" >
        <SubmitButton isEdit={this.props.isEdit}/>
       
        </FormHeader>
        <Grid container className={classes.mainContainer} spacing={2}>
          <Grid item  className={classes.itemTextField} xs={12} >
            <Field
              name="heading"
              component={renderTextField}
              label="Header"
              fullWidth
            />
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} >
            <Field
              name="subHeading"
              component={renderTextField}
              label="SubHeader"
              fullWidth
            />
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} >
            <Field
              name="body"
              component={renderTextField}
              label="Body"
              multiline
              rowsMax="10"
              margin="normal"
              fullWidth
            />
          </Grid>        
        </Grid>
      </form>
    )
  }

}

export default reduxForm({
  form: 'heroSectionForm', // a unique identifier for this form
  validate:validateHeroForm,
})(withTheme(withStyles(useStyles)(HeroSectionForm)));;
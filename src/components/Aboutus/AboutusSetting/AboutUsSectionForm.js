import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Grid, Avatar, } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {FormHeader}  from '../../ui/form/FormHeader';
import { SubmitButton} from '../../ui/Buttons';
import {renderTextField,renderSelectField}   from '../../ui/form/formFields';
import {validateAboutUsForm} from '../../ui/form/validateForm'

const useStyles = theme => ({
  mainContainer: {
    padding: "1em"
  },
  itemTextField: {
    marginBottom: "0.5em",
  },

});
class AboutUsSectionForm extends React.Component {
 constructor(props) {
   super(props);
   if(this.props.isEdit ){
   this.state = {
    selectedImage: this.props.initialValues.cardImage
    };
  }
  else{
    this.state = {
      selectedImage: ""
      }
  }
 }
 
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
 
  render() {
    const { classes } = this.props;
    let aboutUsImagesList = this.props.aboutUsImages.length > 0
    	&& this.props.aboutUsImages.map((item, i) => {
      return (
        <option key={i} value={item.imageUrl}>
          {item.fileName}
        </option>
      )
    }, this);

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} >
         <FormHeader label={this.props.label}>
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
              name="body"
              component={renderTextField}
              label="Body"
              multiline
              rowsMax="10"
              margin="normal"
              fullWidth
            />
          </Grid>  
          <Grid item className={classes.itemTextField} xs={12} sm={12} container justify="space-between">
          <Grid item>
            <Field
              name="cardImage"
              onChange={(event, index, value) => {          
                this.setState({selectedImage:event.target.value})
              }} 
              component={renderSelectField}
              label="select card icons"   >
             <option value="" />
              {aboutUsImagesList}
            </Field>
            </Grid>
            <Grid item>
            <Avatar src={this.state.selectedImage}></Avatar> 
            </Grid>  
          </Grid> 
            
        </Grid>
      </form>
    )
  }

}

const mapStateToProps = (state,ownProps) => {
  return {
      form:ownProps.FormName,
      
  };
};

const formWrapped=  reduxForm({
   validate:validateAboutUsForm
  }) (withTheme(withStyles(useStyles)(AboutUsSectionForm)))  
    export default connect(
      mapStateToProps,{}
    )(formWrapped)


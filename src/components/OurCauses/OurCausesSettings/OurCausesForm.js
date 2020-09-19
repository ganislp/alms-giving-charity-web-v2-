import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import {Grid } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {FormHeader}  from '../../ui/form/FormHeader';
import { SubmitButton} from '../../ui/Buttons';
import {renderTextField,renderSelectField,renderNumberField}   from '../../ui/form/formFields';
import {validateOurCausesForm} from '../../ui/form/validateForm'

const useStyles = theme => ({
  mainContainer: {
    padding: "1em"
  },
  itemTextField: {
    marginBottom: "0.5em",
  },

});


class OurCausesForm extends React.Component {
 constructor(props) {
   super(props);
   if(this.props.isEdit ){
   this.state = {
    selectedImage: this.props.initialValues.imageUrl
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
    let ourCausesImagesList = null;

if(this.props.isEdit){
  ourCausesImagesList = this.props.ourCausesImages.length > 0
    	&& this.props.ourCausesImages.map((item, i) => {  
        if( !item.backround){    
      return (       
        <option key={i} value={item.imageUrl}>
          {item.fileName}
        </option>
      )  
        }            
    }, this); 
    
}
else{
  ourCausesImagesList = this.props.ourCausesImages.length > 0
  && this.props.ourCausesImages.map((item, i) => {
  const fileNameAdded =   _.some(this.props.ourCausesDetails, function(card) {return card.fileName === item.fileName})
    if( !fileNameAdded && !item.backround){
  return (       
    <option key={i} value={item.imageUrl}>
      {item.fileName}
    </option>
  )
    } 
}, this);
}

 

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
              component={renderNumberField}
              label="Body"
              multiline
              rowsMax="10"
              margin="normal"
              fullWidth
            />
          </Grid>  

          <Grid item  className={classes.itemTextField} xs={12} >
            <Field
              name="foundGoal"
              type="number"
              component={renderTextField}
              label="Found Goal"
              fullWidth
            />
          </Grid>
          <Grid item  className={classes.itemTextField} xs={12} >
            <Field
              name="foundRaised"
              type="number"
              component={renderNumberField}
              label="Found Raised"
              fullWidth
            />
          </Grid>
        
          
          <Grid item className={classes.itemTextField} xs={12} sm={12} container justify="space-between">
          <Grid item>
            <Field
            fullWidth
              name="imageUrl"       
              onChange={(event, index, value) => {                     
                this.setState({selectedImage:event.target.value})
              }} 
              component={renderSelectField}
              label="Select Our Causes Image"   >
             <option value="" />
              {ourCausesImagesList}
            </Field>
            </Grid>
            <Grid item>
              <img src={this.state.selectedImage} alt={this.state.selectedImage} width="100px" height="100px"></img>
            {/* <Avatar src={this.state.selectedImage} style={{  backgroundColor:"grey" }}></Avatar>  */}
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
    ourCausesDetails:  Object.values(state.ourCausesSection.ourCausesDetails),
    ourCausesImages: Object.values(state.ourCausesSection.ourCausesImages),
  };
};

const formWrapped=  reduxForm({
   validate:validateOurCausesForm
  }) (withTheme(withStyles(useStyles)(OurCausesForm)))  
    export default connect(
      mapStateToProps,{}
    )(formWrapped)


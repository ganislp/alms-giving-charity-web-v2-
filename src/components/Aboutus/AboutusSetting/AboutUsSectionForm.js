import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import {Grid,} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {FormHeader}  from '../../ui/form/FormHeader';
import { SubmitButton} from '../../ui/Buttons';
import {renderTextField,renderSelectField}   from '../../ui/form/formFields';
import {validateHeroCardForm} from '../../ui/form/validateForm'

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

    let aboutUsImagesList = null;

    if(this.props.isEdit){
      aboutUsImagesList = this.props.aboutUsImages.length > 0
          && this.props.aboutUsImages.map((item, i) => {  
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
      aboutUsImagesList = this.props.aboutUsImages.length > 0
      && this.props.aboutUsImages.map((item, i) => {
      const fileNameAdded =   _.some(this.props.aboutUsDetails, function(card) {return card.fileName === item.fileName})
        if( !fileNameAdded && !item.backround){
      return (       
        <option key={i} value={item.imageUrl}>
          {item.fileName}
        </option>
      )
        } 
    }, this);
  }
    const { classes } = this.props;
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
            fullWidth
              name="imageUrl"       
              onChange={(event, index, value) => {                     
                this.setState({selectedImage:event.target.value})
              }} 
              component={renderSelectField}
              label="Select Our Causes Image"   >
             <option value="" />
              {aboutUsImagesList}
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
    aboutUsDetails:  Object.values(state.aboutUsSection.aboutUsDetails),
    aboutUsImages: Object.values(state.aboutUsSection.aboutUsImages),
      
  };
};

const formWrapped=  reduxForm({
   validate:validateHeroCardForm
  }) (withTheme(withStyles(useStyles)(AboutUsSectionForm)))  
    export default connect(
      mapStateToProps,{}
    )(formWrapped)


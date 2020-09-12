import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import {Grid, Avatar, } from '@material-ui/core';
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
class HeroCardSectionForm extends React.Component {
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
    let heroCardImagesList = null;

if(this.props.isEdit){
 heroCardImagesList = this.props.heroCardImages.length > 0
    	&& this.props.heroCardImages.map((item, i) => {      
      return (       
        <option key={i} value={item.imageUrl}>
          {item.fileName}
        </option>
      )              
    }, this); 
    
}
else{
  heroCardImagesList = this.props.heroCardImages.length > 0
  && this.props.heroCardImages.map((item, i) => {
  const fileNameAdded =   _.some(this.props.heroCardDetails, function(card) {return card.fileName === item.fileName})
    if( !fileNameAdded){
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
              {heroCardImagesList}
            </Field>
            </Grid>
            <Grid item>
            <Avatar src={this.state.selectedImage} style={{  backgroundColor:"grey" }}></Avatar> 
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
    heroCardImages: Object.values(state.heroCardSection.heroCardImages), 
    heroCardDetails:  Object.values(state.heroCardSection.heroCardDetails),
  };
};

const formWrapped=  reduxForm({
   validate:validateHeroCardForm
  }) (withTheme(withStyles(useStyles)(HeroCardSectionForm)))  
    export default connect(
      mapStateToProps,{}
    )(formWrapped)


import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import {Grid,Avatar } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {FormHeader}  from '../../ui/form/FormHeader';
import { SubmitButton} from '../../ui/Buttons';
import {renderTextField,renderSelectField}   from '../../ui/form/formFields';
import {validateCausesStatsForm} from '../../ui/form/validateForm'

const useStyles = theme => ({
  mainContainer: {
    padding: "1em"
  },
  itemTextField: {
    marginBottom: "0.5em",
  },

});
class CausesStatsViewForm extends React.Component {

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
    let causesStatsImagesList = null;

if(this.props.isEdit){
 causesStatsImagesList = this.props.causesStatsImages.length > 0
    	&& this.props.causesStatsImages.map((item, i) => {      
      return (       
        <option key={i} value={item.imageUrl}>
          {item.fileName}
        </option>
      )              
    }, this); 
    
}
else{
  causesStatsImagesList = this.props.causesStatsImages.length > 0
  && this.props.causesStatsImages.map((item, i) => {
  const fileNameAdded =   _.some(this.props.causesStatsViewDetails, function(card) {return card.fileName === item.fileName})
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
         <FormHeader label="Create Causes Stats View Content" >
        <SubmitButton isEdit={this.props.isEdit}/>
       
        </FormHeader>
        <Grid container className={classes.mainContainer} spacing={2}>
          <Grid item  className={classes.itemTextField} xs={12} >
            <Field
              name="heading"
              component={renderTextField}
              label="Heading"
              fullWidth
            />
          </Grid>
    
          <Grid item  className={classes.itemTextField} xs={12} >
            <Field
              name="stats"
              type="number"
              component={renderTextField}
              label="stats"
              fullWidth
            />
          </Grid>
          <Grid item className={classes.itemTextField} xs={12} sm={12} container justify="space-between">
          <Grid item>
            <Field
              name="imageUrl"
            
              onChange={(event, index, value) => {                     
                this.setState({selectedImage:event.target.value})
              }} 
              component={renderSelectField}
              label="select card icons"   >
             <option value="" />
              {causesStatsImagesList}
            </Field>
            </Grid>
            <Grid item>
            <Avatar src={this.state.selectedImage} ></Avatar> 
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
    causesStatsViewDetails: Object.values(state.causesStatsSection.causesStatsViewDetails),
    causesStatsImages: Object.values(state.causesStatsSection.causesStatsImages),
      
  };
};

const formWrapped=  reduxForm({
   validate:validateCausesStatsForm
  }) (withTheme(withStyles(useStyles)(CausesStatsViewForm)))  
    export default connect(
      mapStateToProps,{}
    )(formWrapped)

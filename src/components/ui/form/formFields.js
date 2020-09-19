import React from 'react';
import { TextField} from '@material-ui/core';
import {createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {NativeSelect,Select ,InputLabel} from '@material-ui/core';
import { KeyboardDatePicker,MuiPickersUtilsProvider ,DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import FormHelperText from '@material-ui/core/FormHelperText';
import MuiPhoneNumber from "material-ui-phone-number";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

export const renderTextField    = ({ classes, label, input, meta: { touched, invalid, error }, ...custom }) => {
  return  <TextField
  label={label}
  required      
  placeholder={label}
  error={touched && invalid}
  helperText={touched && error}
  color="secondary"
  {...input}
  {...custom}
/>
}

export const renderNumberField    = ({ classes, label, input, meta: { touched, invalid, error }, ...custom }) => {
  return  <TextField
  label={label}
  type="number"
  required      
  placeholder={label}
  error={touched && invalid}
  helperText={touched && error}
  color="secondary"
  {...input}
  {...custom}
  
/>
}


export const renderSelectField = ({ label, input, meta: { touched, error }, children, ...custom }) =>  {
  return (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
      <NativeSelect
        required
        {...input}
        {...custom} 
      >
        {children}
      </NativeSelect>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
}



export const renderPhoneField = ({ label, classes, input, meta: { touched, invalid, error }, ...custom }) => {
  return (
    <MuiPhoneNumber
      label={label}
      required
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


export const renderDateField= ({  meta: { submitting, error, touched },
  input: { onBlur, value, ...inputProps },
  ...others }) => {


  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };
  const muiTheme = createMuiTheme({overrides: { 
    MuiButton: { textPrimary: { color: '#333', } }, 
  }   
})
  return (
    <ThemeProvider theme={muiTheme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
    <KeyboardDatePicker 
    disableToolbar
      {...inputProps}
      {...others}
      format="dd/MM/yyyy"
      value={value ? new Date(value) : null}
      disabled={submitting}
      style={{ MuiButton: { textPrimary: { color: 'red', } }, }}
      // KeyboardButtonProps={{
      //   "aria-label": "change date",
      //   "color":"secondary"
      // }},
      color="secondary"
      onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
      error={error && touched}
      onChange={onChange}
    />
    </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

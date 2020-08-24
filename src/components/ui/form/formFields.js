import React from 'react';
import { TextField} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
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
  // required      
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
      <NativeSelect
        required
        {...input}
        {...custom}
        inputProps={{
          name: 'country',
          id: 'country-native-label-placeholder',
        }}

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

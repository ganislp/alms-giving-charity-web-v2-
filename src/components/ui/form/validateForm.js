


export const validateCompanyForm = values => {
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
    'body',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
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

    if (values.phone.length < 12) {
      errors.phone = 'Invalid phone number'
    }
  }

  return errors
}


export const validateHeroForm = values => {
  const errors = {}
  const requiredFields = [
    'heading',
    'subHeading',
    'body',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}


export const validateHeroCardForm = values => {
  const errors = {}
  const requiredFields = [
    'heading',
    'body',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }


  })


  return errors
}

export const validateUpComingEventsForm = values => {
  const errors = {}
  const requiredFields = [
    'heading',
    'date',
    'location',
    'body',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

export const validateOurCausesForm = values => {
  const errors = {}
  const requiredFields = [
    'heading',
    'body',
    'foundRaised',
    'foundGoal',
  ]
  requiredFields.forEach(field => {
    if (!values[field] || values[field] <= 0) {
      errors[field] = 'Required'
    }
   
  })
  //  if(Object.keys(values)[0] === 'foundRaised'){
  //   console.log("field", Object.keys(values)[0]) ;
  //   console.log("field", values['foundRaised']) ;
  //  }

  
  return errors
}

export const validateCausesStatsForm = values => {
  const errors = {}
  const requiredFields = [
    'heading',
    'stats',
  ]
  requiredFields.forEach(field => {
    if (!values[field] || values[field] <= 0) {
      errors[field] = 'Required'
    }
   
  })
  //  if(Object.keys(values)[0] === 'foundRaised'){
  //   console.log("field", Object.keys(values)[0]) ;
  //   console.log("field", values['foundRaised']) ;
  //  }

  
  return errors
}


export const validateLoginForm = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password',

  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
    
  })

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  return errors
}
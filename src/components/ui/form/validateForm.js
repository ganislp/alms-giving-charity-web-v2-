


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
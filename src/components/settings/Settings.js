import React from 'react';
import { connect } from 'react-redux';
import { Container, Paper, LinearProgress } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { createCompanyDetails } from '../../actions/api/companyDetailsApi';
import { showSuccessSnackbar } from '../../actions/uiActions/snackbarActions'
import CompanyForm from './companySettings/CompanyForm';


const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  mainContainer: {
    paddingTop: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0em"
    }
  },


  h6Heading: {
    ...theme.palette.typography.h6White,
  },

  donateButton: {
    ...theme.typography.donateButton,
    color: theme.palette.common.white
  },

  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[500],
    },
  },
});

class Settings extends React.Component {

  onSubmit = formValues => {
    const convertedFormValues = Object.assign({}, {
      companyName: formValues.companyName,
      addresses: {
        addressline1: formValues.addressline1,
        addressline2: formValues.addressline2,
        citytown: formValues.citytown,
        province: formValues.province,
        zipcode: formValues.zipcode,
        country: formValues.country,
      },
      contactDetails: {
        email: formValues.email,
        phone: formValues.phone,
      }
    })
    const { uid } = Object.assign({}, ...Object.values(this.props.companyDetails));
    this.props.createCompanyDetails(convertedFormValues, uid);
  };



  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <LinearProgress className={this.props.classes.buttonSuccess} />
    }

  }


  renderCompantForm() {
    const { addresses, contactDetails, companyName } = Object.assign({}, ...Object.values(this.props.companyDetails));
    if (this.props.isLoading) {
      return <LinearProgress color="secondary" />
    }
    else {

      return (
        <React.Fragment>
          {this.renderSubmitProcess()}
          <CompanyForm onSubmit={this.onSubmit}
            initialValues={{ ...addresses, ...contactDetails, companyName }}
          />
          {this.renderSubmitProcess()}
        </React.Fragment>

      )
    }
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Paper className={classes.root} >
          {this.renderCompantForm(classes, theme)}
        </Paper>
      </Container>

    )
  }
}
const mapStateToProps = state => {
  return {
    companyDetails: state.companyDetails,
    isSubmiting: state.companyDetails.onSubmiting,
    errorSubmit: state.companyDetails.error,
    isLoading: state.companyDetails.loading
  };
};

export default connect(mapStateToProps, { createCompanyDetails, showSuccessSnackbar })
  (withTheme(withStyles(useStyles)(Settings)));

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Paper,} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createCompanyDetails } from '../../actions/api/companyDetailsApi';
import { showSuccessSnackbar } from '../../actions/uiActions/snackbarActions'
import CompanyForm from './companySettings/CompanyForm';
import {LoadingProcess,SubmitProcess} from '../ui/ProgressBars'


const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  mainContainer: {
    paddingTop: "2em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "1em"
    }
  },


  h6Heading: {
    ...theme.palette.typography.h6White,
  },

  donateButton: {
    ...theme.typography.donateButton,
    color: theme.palette.common.white
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

  renderCompantForm() {
    const { addresses, contactDetails, companyName } = Object.assign({}, ...Object.values(this.props.companyDetails));
      return (
        <React.Fragment>
          <LoadingProcess isLoading={this.props.isLoading}/>
          <SubmitProcess  isSubmiting={this.props.isSubmiting}/>
          <CompanyForm onSubmit={this.onSubmit}
            initialValues={{ ...addresses, ...contactDetails, companyName }}
          />
            <SubmitProcess  isSubmiting={this.props.isSubmiting}/>
        </React.Fragment>

      )
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer}  >
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
    isSubmiting: _.some(_.values(state.pendingStates.CREATE_COMPANY_DETAILS)),
    isLoading: _.some(_.values(state.pendingStates.GET_COMPANY_DETAILS)),
  };
};

export default connect(mapStateToProps, { createCompanyDetails, showSuccessSnackbar })
  (withTheme(withStyles(useStyles)(Settings)));

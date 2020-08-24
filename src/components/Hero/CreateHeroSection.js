import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Paper, LinearProgress } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { createHero } from '../../actions/api/heroApi';
import HeroSectionForm from './HeroSectionForm';
import { green } from '@material-ui/core/colors';

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


  // h6Heading: {
  //   ...theme.palette.typography.h6White,
  // },

  // donateButton: {
  //   ...theme.typography.donateButton,
  //   color: theme.palette.common.white
  // },

  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[500],
    },
  },
});

class CreateHeroSection extends Component {


  renderSubmitProcess() {
    if (this.props.isSubmiting) {
      return <LinearProgress className={this.props.classes.buttonSuccess} />
    }

  }
  onSubmit = formValues => {

    this.props.createHero(formValues);
  };

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Paper className={classes.root} >
        {this.renderSubmitProcess()}
          <HeroSectionForm onSubmit={this.onSubmit} />
          {this.renderSubmitProcess()}
        </Paper>
      </Container>
    )
  }
}
const mapStateToProps = state => {
  //console.log("state",state.heroDetails)
  return {
    heroDetails: state.companyDetails,
    isSubmiting: state.heroDetails.onSubmiting,
  };
};
export default connect(mapStateToProps, { createHero })(withTheme(withStyles(useStyles)(CreateHeroSection)));
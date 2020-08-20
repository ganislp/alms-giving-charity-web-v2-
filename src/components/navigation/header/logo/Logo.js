import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import companyLogo from '../../../../assets/Logo/output-onlinepngtools.png';

const useStyles = theme => ({
  logoContainer:{
    height: "6em"
  },
});
 

class  Logo extends React.Component{
  render(){
    const { classes } = this.props;
    return(
<img src={companyLogo} alt="companyLogo" className={classes.logoContainer}></img>
    )
  }
}


export default (withTheme(withStyles(useStyles)(Logo)));

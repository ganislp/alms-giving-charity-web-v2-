import React from 'react';

import { Router, Route, Switch,Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import AppHeader from './appBar/AppHeader';
import history from '../../../history';
import Settings from '../../settings/Settings';




const  Header = (props) => {
  const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSMD = useMediaQuery(theme.breakpoints.down("sm"));
  return(
    <Router history={history}>
<AppHeader/>
<Switch>
<Route exact path="/settings" component={props => (<Settings {...props} /> )}></Route>
  </Switch>
</Router>
  )
}



export default Header;
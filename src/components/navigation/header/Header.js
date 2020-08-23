import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AppHeader from './appBar/AppHeader';
import history from '../../../history';
import Settings from '../../settings/Settings';





class Header extends React.Component {


  render() {

    
    return (
      <Router history={history}>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}></Route>
          <Route exact path="/aboutus" component={() => <div>About Us</div>}></Route>
          <Route exact path="/causes" component={() => <div>Causes</div>}></Route>
          <Route exact path="/news" component={() => <div>News</div>}></Route>
          <Route exact path="/gallery" component={() => <div>Gallery</div>}></Route>
          <Route exact path="/contact" component={() => <div>News</div>}></Route>
           <Route exact path="/settings" component={() => (<Settings {...this.props}/>)}></Route> 
        </Switch>
      </Router>
    )
    
  }
}


export default  Header;
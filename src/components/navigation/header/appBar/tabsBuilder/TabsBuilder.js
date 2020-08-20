import React from 'react';
import {connect} from 'react-redux';
import {Tabs,Tab} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { withStyles, withTheme } from '@material-ui/core/styles';

import {routes} from '../../../../constants';
import {selectdAppTab} from '../../../../../actions/navigationAcions'

const useStyles = theme => ({
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:"1.8em",
    paddingRight:"0px"
     }
});

class TabsBuilder extends React.Component{

  render(){
    const { classes } = this.props;
    return(
      <Tabs 
      value={this.props.seletedValue} 
      textColor="secondary" onChange={(e,newValue) => this.props.selectdAppTab(newValue)}>
        {routes.map((route,index) => (
          <Tab label={route.label} component={Link} to={route.link} disableRipple
          key={`${route} ${index}`}
           className={classes.tab}>          
           </Tab>
        ))}
      </Tabs>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    seletedValue: state.tabOnSelect
  }
}

export default connect(mapStateToProps,{selectdAppTab}) (withTheme(withStyles(useStyles)(TabsBuilder)));

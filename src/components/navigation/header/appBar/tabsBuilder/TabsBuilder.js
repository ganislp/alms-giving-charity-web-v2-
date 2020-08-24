import React from 'react';
import {connect} from 'react-redux';
import {Tabs,Tab} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {headerMenutabAct} from '../../../../../actions/uiActions/navigationAcions'

import {routes} from '../../../../constants';


const useStyles = theme => ({
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:"1.8em",
    paddingRight:"0px"
     }
});

class TabsBuilder extends React.Component{

  componentDidMount(){
    routes.forEach(route => {
      switch (window.location.pathname){
        case `${route.link}` :
          if(this.props.seletedValue !== route.activeIndex){
            this.props.headerMenutabAct(route.activeIndex)
          }
          break;
          default: break;
      }   

    })
  }



  render(){
    const { classes } = this.props;
    return(
      <Tabs 
      value={this.props.seletedValue} 
      textColor="secondary" onChange={(e,newValue) => this.props.headerMenutabAct(newValue)}>
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
    seletedValue: state.selectdTabValue,
   
  }
}

export default connect(mapStateToProps,{headerMenutabAct}) (withTheme(withStyles(useStyles)(TabsBuilder)));

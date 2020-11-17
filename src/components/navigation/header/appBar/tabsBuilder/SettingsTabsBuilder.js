import React from 'react';
import {connect} from 'react-redux';
import {Tabs,Tab} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {headerSettingsMenutabAct,headerMenutabAct} from '../../../../../actions/uiActions/navigationAcions'
import {settingsRoutes} from '../../../../constants';
import history from '../../../../../history';

const useStyles = theme => ({
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:"1.5em",
    paddingRight:"0px",
    [theme.breakpoints.down("md")]: {
      marginLeft:"0em",
   } ,
     }
});

class SettingsTabsBuilder extends React.Component{

  componentDidMount(){  
    settingsRoutes.forEach(settingsRoutes => {
      switch (window.location.pathname){
        case `${settingsRoutes.link}` :
          if(this.props.seletedSettingsTabValue !== settingsRoutes.activeIndex){
            this.props.headerSettingsMenutabAct(settingsRoutes.activeIndex)            
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
      value={this.props.seletedSettingsTabValue} 
      textColor="secondary" onChange={(e,newValue) => {
        this.props.headerSettingsMenutabAct(newValue); 
        this.props.headerMenutabAct(6);    
        }}>
        {settingsRoutes.map((route,index) => (
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
  console.log(" SettingsTabsBuilder seletedValue",state);
  return {
    seletedSettingsTabValue: state.selectdSettingsTabValue,
    seletedValue: state.selectdTabValue,
   
  }
}

export default connect(mapStateToProps,{headerSettingsMenutabAct,headerMenutabAct}) (withTheme(withStyles(useStyles)(SettingsTabsBuilder)));

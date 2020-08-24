import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SwipeableDrawer, List, ListItem, ListItemText,Grid,Typography } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles, withTheme } from '@material-ui/core/styles';
import { drawerOpenAct,headerMenutabAct } from '../../../../../actions/uiActions/navigationAcions'
import { routes } from '../../../../constants';


const useStyles = theme => ({
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    // height:"30px",
    // width:"30px",
  },
  drawerItem: {
    ...theme.typography.tab,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      // color: theme.palette.common.blue,      
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",

  },
});

class DrawerBuilder extends React.Component {
  openDrawerHandler = () => {
  this.props.drawerOpenAct(true);
  }

  closeDrawerHandler = () => {
    this.props.drawerOpenAct(false);
  }

  iconButtonDrawerHandler = () => {
    this.props.drawerOpenAct(!this.props.drawerOpen)
  }

  listItemOnclickHandler = (activeIndex) => {
    this.props.drawerOpenAct(false);
     this.props.headerMenutabAct(activeIndex);
  }

  renderListItem(classes) {
    return <List  >
      {routes.map((route, index) => (
        <ListItem
          divider
          key={`${route}${index}`}
          component={Link}
          to={route.link}
          button
           selected={this.props.seletedValue === route.activeIndex}
          classes={{ selected: classes.drawerItemSelected }}
          onClick={() => this.listItemOnclickHandler(route.activeIndex)}>
          <ListItemText className={classes.drawerItem} disableTypography>
            {route.label}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  }

  renderSwipeableDrawer() {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const { classes } = this.props;
    return <SwipeableDrawer 
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={this.props.drawerOpen}
      onOpen={this.openDrawerHandler}
      onClose={this.closeDrawerHandler}>
      <div className={classes.toolbarMargin} />
      {this.renderListItem(classes)}
    </SwipeableDrawer>
  }

  renderIconButton() {
    const {companyName} = this.props.companyDetails;
    return (
      <Grid container justify="space-between" alignItems="center">        
         <Grid item>
       <Typography variant="h6" style={{...this.props.theme.palette.typography.h6Grey}}>
       {companyName}
       </Typography>
      </Grid>

        <Grid item>
      <IconButton className={this.props.classes.drawerIconContainer}
        disableRipple
        onClick={this.iconButtonDrawerHandler} >
        <MenuIcon/>
      </IconButton>
      </Grid>
     
      </Grid>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSwipeableDrawer()}
        {this.renderIconButton()}
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {

    drawerOpen: state.drawerOpen,
    seletedValue: state.selectdTabValue,
    companyDetails: Object.assign({}, ...Object.values(state.companyDetails)),
  }
}

export default connect(mapStateToProps, { drawerOpenAct,headerMenutabAct })
(withTheme(withStyles(useStyles)(DrawerBuilder)));


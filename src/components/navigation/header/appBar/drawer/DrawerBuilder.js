import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles, withTheme } from '@material-ui/core/styles';
import { drawerOpenAct } from '../../../../../actions/navigationAcions'
import {routes} from '../../../../constants';


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
  // const classes = drawerStyles.drawerUseStyles();
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
  }

  render() {
    const { classes } = this.props;
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
      <React.Fragment>
        <SwipeableDrawer disablePadding
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={this.props.drawerOpen}
          onOpen={this.openDrawerHandler}
          onClose={this.closeDrawerHandler}>
          <div className={classes.toolbarMargin} />
          <List disablePadding >
            {routes.map((route, index) => (
              <ListItem
                divider
                key={`${route}${index}`}
                component={Link}
                to={route.link}
                button
                selected={this.props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => this.listItemOnclickHandler(route.activeIndex)}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.label}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <IconButton disableRipple
          onClick={this.iconButtonDrawerHandler}

          className={classes.drawerIconContainer}
        >
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.drawerOpen
  }
}

export default connect(mapStateToProps, { drawerOpenAct })(withTheme(withStyles(useStyles)(DrawerBuilder)));


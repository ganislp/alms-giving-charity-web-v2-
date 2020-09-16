import React from 'react';
import { connect } from 'react-redux';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid,Typography } from '@material-ui/core';
import _ from 'lodash';
import history from '../../history';
import { SettingButton } from '../ui/Buttons';
import UpComingEventsBuild from './UpComingEventsBuild';

const useStyles = theme => ({

itemContainer:{
  marginBottom:"3em",
  [theme.breakpoints.down("md")]: {
    marginBottom:"2em",
  } 
},

  h2MainContainer:{
 ...theme.palette.typography.h2,
    [theme.breakpoints.down("md")]: {
      fontSize:'2rem',
    } 
  },
  // cardItemContaner: {
  //   [theme.breakpoints.down("sm")]: {
  //     paddingLeft: "0em",
  //     paddingRight: "0em",
  //     marginRight: "1em",
  //     marginBottom: "1em",
  //   },
  // },
  // settingsContainer: {
  //   backgroundColor: theme.palette.common.blue,
  //   padding: "0.3em"
  // },

  // itemContainer: {
  //   [theme.breakpoints.down("sm")]: {
  //     marginBottom: "1em",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     marginBottom: "1em",
  //   },
  // },
  // mainContainer: {
  //   [theme.breakpoints.down("md")]: {
  //     paddingLeft: "1em",
  //     paddingRight: "1em",
  //   },
  // }

});
class UpComingEventsView extends React.Component {

  renderSettingSmallButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="small" click={() => history.push("/upComingEvents/upComingEventsSettings")}></SettingButton>
    }
  }

  render() {
    const { classes } = this.props;
   
    return (
     
      <Grid container justify="space-between" >
        <Grid item container justify="space-between" alignItems="center">
          <Grid item className={classes.itemContainer}>
        <Typography variant="h2"    className={classes.h2MainContainer}>
        Upcoming Events
            </Typography>
            </Grid>
            <Grid item className={classes.itemContainer}>
            {this.renderSettingSmallButton()} 
              </Grid>
          </Grid>

     
          <Grid item>
            {this.props.upComingEventsDetails.map((data, index) => (        
                <UpComingEventsBuild
                key={`${data.fileName} ${index}`}
                  heading={data.heading}
                  body={data.body}
                  imageUrl={data.imageUrl}
                  fileName={data.fileName} 
                  location={data.location}
                  eventDate={data.eventDate}
                  />          
            )
            )}
          
          </Grid>
     

      </Grid>

    )
  }

}

const mapStateToProps = state => {

  return {
    upComingEventsDetails: Object.values(state.upComingEventsSection.upComingEventsDetails)
    .filter(card => card.active === true),
    isLoading: _.some(_.values(state.pendingStates.GET_UP_COMING_EVENTS)),
  };
};

export default connect(mapStateToProps, {  })(withTheme(withStyles(useStyles)(UpComingEventsView)));;
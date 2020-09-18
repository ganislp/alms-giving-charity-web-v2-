import React from 'react';
import { connect } from 'react-redux';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid,Typography } from '@material-ui/core';
import _ from 'lodash';
import history from '../../history';
import { SettingButton } from '../ui/Buttons';
import FeaturedCauseBuild from './FeaturedCauseBuild'


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
});
class FeaturedCauseView extends React.Component {

  renderSettingSmallButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="small" click={() => history.push("/upComingEvents/upComingEventsSettings")}></SettingButton>
    }
  }

  render() {
    const { classes,theme } = this.props;
const { heading,body,imageUrl,fileName,location,eventDate }  = Object.assign({}, ...Object.values((this.props.upComingEventsDetails.filter(item => item.active === true && item.isFeaturedCause === true))));
    return (
     
  
      <Grid container  >
     <Grid item container justify="space-between" alignItems="center" style={{backgroundColor:theme.palette.common.white}}>
          <Grid item className={classes.itemContainer}>
        <Typography variant="h2"    className={classes.h2MainContainer}>
        Featured Cause
            </Typography>
            </Grid>
            <Grid item className={classes.itemContainer}>
            {this.renderSettingSmallButton()} 
              </Grid>
          </Grid>
     <Grid item xs={12}   style={{backgroundColor:theme.palette.common.bgColour,height:"auto"}}>
                <FeaturedCauseBuild       
                  heading={heading}
                  body={body}
                  imageUrl={imageUrl}
                  fileName={fileName} 
                  location={location}
                  eventDate={eventDate}
                  />                      
     </Grid>
     </Grid>
 
    )
  }

}

const mapStateToProps = state => {

  return {
    upComingEventsDetails: Object.values(state.upComingEventsSection.upComingEventsDetails),
    isLoading: _.some(_.values(state.pendingStates.GET_UP_COMING_EVENTS)),
  };
};

export default connect(mapStateToProps, {  })(withTheme(withStyles(useStyles)(FeaturedCauseView)));;
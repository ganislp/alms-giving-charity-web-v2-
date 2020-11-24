import React from 'react';
import { connect } from 'react-redux';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid, Container, Hidden, LinearProgress, Typography } from '@material-ui/core';
import _ from 'lodash';
import history from '../../history';
import { SettingButton } from '../ui/Buttons';
import CausesStatsViewBuild from './CausesStatsViewBuild'

const useStyles = theme => ({

  mainh3:{
    fontSize:"3em",
    paddingBottom:"1em",
    paddingTop:"1em",
    lineHeight: "1.5",
    fontWeight:400,
    [theme.breakpoints.down("md")]: {
      fontSize:"1.5em",
     },
  },

  spenH1TextUnderLine:{
    borderBottom:"5px solid #0B72B9",
    borderColor:theme.palette.common.blue,
    width:"10%"
  //borderRadius: "5px",
   
  },
  learnButton: {
    ...theme.typography.learnButton
  },

});
class CausesStatsViewView extends React.Component {

  // componentDidMount() {
  //   this.props.getCausesStats();
  // }

  renderSettingLargeButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="large" click={() => history.push("/causesStats/causesStatsSettings")}></SettingButton>
    }
  }

  renderSettingSmallButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="small" click={() => history.push("/causesStats/causesStatsSettings")}></SettingButton>
    }
  }

  render() {
    const { classes,theme } = this.props;

    if (!_.isEmpty(this.props.causesStatsDetails) && !_.isEmpty(this.props.causesStatsViewDetails) && this.props.isLoading) {
      return <LinearProgress color="secondary" />
    }
    return (

      <Grid container justify="space-between" >
        {/* <Grid item container justify="flex-end" >
          <Hidden lgUp>
            {this.renderSettingSmallButton()}  </Hidden>
          <Hidden mdDown>
            {this.renderSettingLargeButton()}  </Hidden>
        </Grid> */}

        <Container maxWidth="lg"  className={classes.mainContainer} >
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={12} md={6} container >
              <Grid item>
                <Typography variant="h3" className={classes.mainh3}>
                {this.props.causesStatsDetails.heading}
                <hr className={classes.spenH1TextUnderLine} align="left"/>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{...theme.palette.typography.body1,}}>
                  {this.props.causesStatsDetails.body}
                </Typography>
              </Grid>

            </Grid>

            <Grid item xs={12} md={6} container alignItems="flex-end" justify="space-between">
              {this.props.causesStatsViewDetails.map(content =>
                <Grid item container direction="column" key={content.uid} xs={12} sm={3} spacing={2} alignItems="center" >
                  <CausesStatsViewBuild
                    heading={content.heading}
                    imageUrl={content.imageUrl}
                    fileName={content.fileName}
                    stats={content.stats}
                  />
                </Grid>

              )}

            </Grid>

          </Grid>

        </Container>

      </Grid>

    )
  }

}

const mapStateToProps = state => {

  return {

    causesStatsDetails: _.pick(...Object.values(state.causesStatsSection.causesStatsDetails).filter(item => item.active === true), 'heading', 'body'),
    causesStatsViewDetails: Object.values(state.causesStatsSection.causesStatsViewDetails).filter(card => card.active === true),
    isLoading: _.some(_.values(state.pendingStates.GET_CAUSES_STATS)) || _.some(_.values(state.pendingStates.GET_CAUSES_STATS_VIEW)),
  };
};

export default connect(mapStateToProps, {})(withTheme(withStyles(useStyles)(CausesStatsViewView)));;
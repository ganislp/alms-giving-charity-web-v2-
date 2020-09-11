import React from 'react';
import { connect } from 'react-redux';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid, Container, Hidden } from '@material-ui/core';
import _ from 'lodash';
import { getHeroCards } from '../../actions/api/heroCardApi';
import CardBuild from './CardsBuild';
import history from '../../history';
import { SettingButton } from '../ui/Buttons'

const useStyles = theme => ({
  cardItemContaner: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0em",
      paddingRight: "0em",
      marginRight: "1em",
      marginBottom: "1em",
    },
  },
  settingsContainer: {
    backgroundColor: theme.palette.common.blue,
    padding: "0.3em"
  },

  itemContainer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  mainContainer: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  }

});
class HeroCardsView extends React.Component {

  componentDidMount() {
    this.props.getHeroCards();
  }

  renderSettingLargeButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="large" click={() => history.push("/heroCard/heroCardSettings")}></SettingButton>
    }
  }

  renderSettingSmallButton() {
    if (!this.props.isLoading) {
      return <SettingButton size="small" click={() => history.push("/heroCard/heroCardSettings")}></SettingButton>
    }
  }

  render() {
    const { classes } = this.props;
   
    return (
     
      <Grid container justify="space-between" >
        <Grid item container justify="flex-end" style={{ marginBottom: "1em", marginTop: "1em" }}>
          <Hidden lgUp>
            {this.renderSettingSmallButton()}  </Hidden>
          <Hidden mdDown>
            {this.renderSettingLargeButton()}  </Hidden>
        </Grid>

        <Container maxWidth="lg" disableGutters className={classes.mainContainer} >
          <Grid item container justify="space-between" spacing={3}>
            {this.props.heroCardDetails.map((data, index) => (
              <Grid item xs={12} sm={4} key={`${data.imageName} ${index}`} className={classes.itemContainer} >
                <CardBuild
                  heading={data.heading}
                  subTitle={data.body}
                  image={data.cardImage}
                  imageName={data.createdAt}

                />
              </Grid>

            )
            )}
          </Grid>

        </Container>

      </Grid>

    )
  }

}

const mapStateToProps = state => {

  return {
    heroCardDetails: Object.values(state.heroCardSection.heroCardDetails).filter(card => card.active === true),
    isLoading: _.some(_.values(state.pendingStates.GET_HERO_CARD)),
  };
};

export default connect(mapStateToProps, { getHeroCards })(withTheme(withStyles(useStyles)(HeroCardsView)));;
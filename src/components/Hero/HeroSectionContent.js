import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Typography, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles, withTheme } from '@material-ui/core/styles';
import history from '../../history';

const useStyles = theme => ({
  paper: {
    width: "100%",
    height: "45em",
    backgroundColor: "rgba(0,0,0, 0.5)",
    position: "relative",
  },

  heading: {
    marginBottom: "0.2em",
    ...theme.palette.typography.h1,
    fontSize: "6rem",
  },

  subHeading: {
    marginBottom: "0.5em",
    ...theme.palette.typography.h1,
    fontSize: "2rem",
  },

  body: {
    ...theme.palette.typography.h1,
    fontSize: "1rem",
    fontWeight: 400,
    maxWidth:"40em",
    lineHeight: 1.5,    
  },

  h4Contaner: {
    marginBottom: "0.5em",
    fontSize: "10rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      paddingLeft: "1.2em",
      marginBottom: "1em",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      paddingLeft: "0.8em",
      marginBottom: "1.5em",
    }
  },
})

class HeroSectionContent extends React.Component {


  renderHeroContent(classes, imageUrl, theme) {

    const styles = {
      backgroundImage: `url(${imageUrl})`,
      height: "45em",
      width: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        height: "10em",
      },
      [theme.breakpoints.down("xs")]: {
        height: "10em",
      },

    }
    const activeHeroDetails = Object.assign({}, ...Object.values((this.props.heroDetails.filter(hero => hero.active === true))));
    return (
      <Grid container style={styles} >
        <Grid item className={classes.paper} container >
          <Grid item container justify="flex-end" alignItems="flex-start">
            <IconButton aria-label="delete" onClick={() => history.push("/hero/heroSettings")}>
              <SettingsIcon fontSize="large" color="primary" />
            </IconButton>
          </Grid>
          <Container maxWidth="lg" >
            <Grid item container justify="flex-start" alignItems="center" style={{ position: "relative" }}>
              <Grid item container >
                <Typography variant="h1" color="primary" className={classes.heading}>
                  {activeHeroDetails.heading}
                </Typography>
              </Grid>
              <Grid item container>
                <Typography variant="h1" color="primary" className={classes.subHeading} >
                  {activeHeroDetails.subHeading}
                </Typography>
              </Grid>
              <Grid item container>
                <Typography variant="h1" color="primary" className={classes.body}>
                  {activeHeroDetails.body}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    )
  }

  render() {
    const { classes, imageUrl, theme } = this.props;
    return this.renderHeroContent(classes, imageUrl, theme)
  }
}



const mapStateToProps = state => {
  return {
    heroDetails: Object.values(state.heroSection.heroDetails),
  };
};
export default connect(mapStateToProps)(withTheme(withStyles(useStyles)(HeroSectionContent)));
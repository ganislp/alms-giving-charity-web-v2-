import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid, Container, Hidden, Typography } from '@material-ui/core';
import { HeaderButton, SettingButton } from '../ui/Buttons'
import history from '../../history';


const useStyles = theme => ({
  imageConatiner: {
    backgroundImage: (props) => `url(${props.aboutUsBackround.imageUrl})`,
    width: "100%",
    height: "auto",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    verticalalign: "baseline",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  paper: {
    flexGrow: 1,
    width: "100%",
    height: "auto",
    backgroundColor: "rgba(0,0,0, 0.8)",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      alignItems: "flex-start",
    },
  },

  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
    verticalalign: "baseline",
    [theme.breakpoints.down("md")]: {
       height: "auto",
    },
  },

  heading: {
    ...theme.palette.typography.h1,
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      paddingBottom: "1em",
    },

  },
 

  bodyContaner: {
    fontSize: "1rem",
    color: theme.palette.common.lightGrey,
    lineHeight: 2,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      paddingBottom: "1em",
    },
  },

  itemContainer: {
   paddingTop:"5em",
  paddingBottom:"5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop:"1em",
      paddingBottom:"1em",
    },
  },

  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "0.5em"
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0em"
    },
  }

})

class AboutUsSectionView extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.imageConatiner} container>
        <Grid item className={classes.paper} container justify="flex-end" >
        <Grid item   className={classes.iconContainer} >
            {/* <Hidden lgUp>
            <SettingButton size = "small" click = {() => history.push("/aboutus/aboutUsSectionSettings")}></SettingButton>
            </Hidden> */}
            
          </Grid>
          <Container maxWidth="lg" className={classes.itemContainer} disableGutters>
            <Grid container spacing={1}  >
              <Grid item  xs={12} sm={6}>
                <Grid item container justify="space-between"   style={{height: "100%"}} >
                  <Grid item xs={12} >
                    <Typography variant="h1" color="primary" className={classes.heading}   
                    >
                      {this.props.aboutUsDetails.heading}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="primary"  className={classes.bodyContaner} >
                      {this.props.aboutUsDetails.body}
                    </Typography>
                  </Grid>
                  <Grid item style={{ paddingBottom: "1em",}} xs={12}>
                    <HeaderButton label="Read More" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img src={this.props.aboutUsImage.imageUrl}
                  alt={this.props.aboutUsImage.fileName} className={classes.img}></img>
              </Grid>
            </Grid>
          </Container>
          <Grid item   style={{height: "100%"}}  >
            {/* <Hidden mdDown>
              <SettingButton size="large" click={() => history.push("/aboutus/aboutUsSectionSettings")}></SettingButton>
            </Hidden> */}
            
          </Grid>
     </Grid>

      </Grid>
    )
  }

}
const mapStateToProps = state => {
  return {
    aboutUsDetails: _.pick(...Object.values(state.aboutUsSection.aboutUsDetails).filter(item => item.active === true), 'heading', 'body'),
    aboutUsBackround: _.pick(...Object.values(state.aboutUsSection.aboutUsImages).filter(item => item.active === true && item.backround === true), 'imageUrl', 'fileName'),
    aboutUsImage: _.pick(...Object.values(state.aboutUsSection.aboutUsImages).filter(item => item.active === true && item.backround === false), 'imageUrl', 'fileName'),
    isLoading: _.some(_.values(state.pendingStates.GET_ABOUT_US)),
  };
};

export default connect(mapStateToProps, {})(withTheme(withStyles(useStyles)(AboutUsSectionView)));
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
import CustomizedProgressBars from '../ui/CustomizedProgressBars';
import { HeaderMediumButton } from '../ui/Buttons';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
  },

  cardMediaContainer: {
    paddingTop: '56.25%',
 
  },

  cardh3: {
    ...theme.palette.typography.h3,
    paddingBottom: "0.5em",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "0.5em",
      fontSize: "0.9em"

    },
  },
  cardbody: {
    ...theme.palette.typography.body1,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
      fontSize: "1rem"
    },
  },
  itemContainer: {
    marginBottom: "1em"
  }

}));


const OueCausesCardView = (props) => {
  const classes = useStyles();
  const percentage = (100 * props.foundRaised) / props.foundGoal;
  return (
    <Grid container style={{ paddingBottom: "2em" }}>
      <Card >
        <CardMedia image={props.imageUrl} className={classes.cardMediaContainer} />
        <CardContent>
          <Grid container >
            <Grid item>
              <Typography variant="h3" className={classes.cardh3}>
                {props.heading}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.cardbody}>
                {props.body}
              </Typography>
            </Grid>

            <Grid item container justify="center" alignItems="center" className={classes.itemContainer}>
              <HeaderMediumButton label="Donate Now" />
            </Grid>
            <Grid item xs={12} className={classes.itemContainer}>
              <CustomizedProgressBars completed={percentage.toFixed(0)} />
            </Grid>
            <Grid item xs={12} container justify="space-between">
              <Grid item >
                <Typography variant="body1"  >
                  {`Raised: ${props.foundRaised}`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1"  >
                  {`Goal: ${props.foundGoal}`}
                </Typography>

              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>



  )
}


export default OueCausesCardView
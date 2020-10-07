import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import {  useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function CausesStatsViewBuild(props) {
 
  const theme = useTheme();
  const matchesxsd = useMediaQuery(theme.breakpoints.down("xs"));
  return (

    <React.Fragment>
      <Grid item>
        <img src={props.imageUrl} alt={props.fileName} ></img>
      </Grid>

      <Grid item>
        <Typography variant="h3" >
          {props.stats}
        </Typography>
      </Grid>
      <Grid item  >
        <Typography variant="h3" style={{ ...theme.palette.typography.body1, paddingBottom: matchesxsd ?  "1.5em" : "0"}}>
          {props.heading}
        </Typography>
      </Grid>
    </React.Fragment>

  )
}
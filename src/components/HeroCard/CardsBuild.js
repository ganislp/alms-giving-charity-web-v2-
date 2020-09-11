import React from 'react'
import {Typography,Grid,Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
 
  cardContainer:{
    height: '15vw',
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "4rem",
    color: theme.typography.white,
    lineHeight: 1,
    backgroundColor:theme.palette.common.blue,
    borderRadius:"20px",
    paddingTop:"0.5em",
 // paddingLeft:"0.5em",
  // paddingRight:"0.5em",
   

   [theme.breakpoints.down("md")]: {
    paddingLeft:"0em",
   paddingRight:"0em",
   paddingTop:"0.5em",
   height: "auto",
      },
  
   [theme.breakpoints.down("xs")]: {
    //paddingLeft:"0.1em",
   //paddingRight:"0.1em",
   paddingTop:"0.5em",
   height: "auto",
      },
      
 
  },

   media: {
    height: "1em",
    width: "1em",
    marginBottom:"0.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom:"0.1em",
        }
   
 },
 
  h1Contaner:{
    fontWeight: 400,
    color:theme.palette.common.white,
    fontSize:"1rem",
   marginBottom:"1em",
  },

  bodyContaner:{
    fontSize:"1rem",
    color:theme.palette.common.white,
   // maxWidth:"20em",
    fontWeight:300,
    marginBottom:"1em",
    [theme.breakpoints.down("md")]: {
    // maxWidth:"18em",
       },
       [theme.breakpoints.down("xs")]: {
         marginBottom:"0.5em",
           }
   }
}))

export default function CardBuild(props) {
  const classes = useStyles();
  return (
   
  <Card className={classes.cardContainer}  >
       <Grid item direction="column" alignItems= "center" container justify="center" >
         <Grid item>
       <CardMedia 
        className={classes.media}
        image={props.image}
      />
      </Grid>
      <Grid item  >
      <CardContent>
      <Grid item>
      <Typography variant="h1"   align="center" className={classes.h1Contaner}>
          {props.heading}
        </Typography>
    
      <Typography variant="body2"  align="center" className={classes.bodyContaner}>
          {props.subTitle}
        </Typography>
   
        </Grid>
      </CardContent>
      </Grid>
      </Grid>
  
      </Card>
  
  )
}
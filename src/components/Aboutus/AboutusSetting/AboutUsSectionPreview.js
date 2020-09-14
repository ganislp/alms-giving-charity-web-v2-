import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Grid, Container,Typography } from '@material-ui/core';
import {HeaderButton} from '../../ui/Buttons'




const useStyles = theme => ({
  imageConatiner:{
    backgroundImage:  (props) => `url(${props.aboutUsBackround.imageUrl})`,
    width:"100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",  
    verticalalign: "baseline" ,  
   [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  },
  paper: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.8)",
    position: "relative",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      alignItems:"flex-start",
    },   
  },

  heading: {
    marginBottom: "1em",
    padding:"0px",
    ...theme.palette.typography.h1,
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize:"1.5rem",
   }, 
 
  },


  bodyContaner:{
      fontSize:"1rem",
     color:theme.palette.common.lightGrey,
      lineHeight: 2,
      paddingBottom:"1em",
      [theme.breakpoints.down("md")]: {    
        fontSize:"0.8rem", 
         },  
  },
  
  itemContainer:{
 paddingTop:"3em",
 paddingBottom:"3em",
  [theme.breakpoints.down("md")]: {
    paddingBottom:"2em",

     },  
  },
  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width:"100%",
    height: "50vh",
    verticalalign: "baseline" , 
    [theme.breakpoints.down("md")]: {
      height: "auto",
       },  
  },
  iconContainer:{
   // marginTop:"1em",
    [theme.breakpoints.down("md")]: {
    paddingBottom:"1em"
       },
  }
  
})

class AboutUsSectionPreview extends React.Component {

  render(){
    const { classes } = this.props;
    
    return(
      <Grid  className={classes.imageConatiner} container>
         <Grid item className={classes.paper}  container  justify="center" >
                
          <Container maxWidth="lg" className={classes.itemContainer}>
<Grid  container   justify="space-between" spacing={2}>
<Grid item xs={12} sm={6}>

<Grid item container direction="column" >

          <Grid item xs={12}>
            <Typography variant="h1" color="primary" className={classes.heading}  >
              {this.props.aboutUsDetails.heading}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="primary" gutterBottom className={classes.bodyContaner} >
              {this.props.aboutUsDetails.body}
            </Typography>
          </Grid>
          <Grid item container justify="flex-start" style={{marginBottom:"1em"}}>
          <HeaderButton  label="Read More"/>
          </Grid>
        </Grid>   
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={this.props.aboutUsImage.imageUrl}
            alt={this.props.aboutUsImage.fileName} className={classes.img}></img>     
        </Grid>
        
        </Grid>
        
        </Container>
       
        </Grid>
        
      </Grid>
    )
  }

}


export default (withTheme(withStyles(useStyles)(AboutUsSectionPreview)));
import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {Grid, Typography, IconButton,Container} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {FooterUseFullLinks,FooterLatestNewsLinks} from '../../constants';


const useStyles = theme => ({
  background: {
    backgroundImage: (props) => `url(${props.footerBgImage.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   // height: "35em",
    width: "100%",
   // marginTop:"5em",
    [theme.breakpoints.down("lg")]: {
     // marginTop:"3em",
  
     },
  },
  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%",
    //height: "35em",
    backgroundColor:"rgba(0,0,0, 0.8)"
  },

rowContaner:{
  
  paddingTop:"5em",
  paddingBottom:"5em",
  [theme.breakpoints.down("md")]: {
    
    paddingTop:"3em",
    paddingBottom:"2em",
  },
 
},
h3ContainerMain:{
...theme.typography.h3,
fontSize:"1rem",
fontWeight:600,
paddingBottom:"2em",
color: theme.palette.common.white,
[theme.breakpoints.down("xs")]: {
  fontSize:"1rem",
 // paddingBottom:"1em"
  },

},
bodyContainer:{
  ...theme.typography.footerTextColor,
  fontSize:"1rem",
  lineHeight:"2em",
  fontWeight:300,
  [theme.breakpoints.down("xs")]: {
    lineHeight:"1.5em",

    },
},
h3Container:{
  ...theme.typography.h3,
  paddingBottom:"2em",
  fontSize:"1.2rem",
  fontWeight:600,
  color: theme.palette.common.white,
  [theme.breakpoints.down("xs")]: {
   paddingTop:"2em",
    paddingBottom:"1em",
    },
  },
  
  subtitle1Contaner:{
    ...theme.palette.typography.body1,
    textAlign:"left",
    fontSize:"1rem",
    fontWeight: 500,
    lineHeight: "1.5"
  },
  subtitle2Contaner:{
    color:theme.palette.common.white,
    textAlign:"left",
    fontWeight:600,
  },
iconContainer:{
  color:"white",
  marginRight:"0.5em"
},
gridItemSpcing:{
  marginBottom:"2em",
  [theme.breakpoints.down("xs")]: {
    marginBottom:"1em",
    },
},
usefullMargin:{
  marginRight:"10em",
  [theme.breakpoints.down("xs")]: {
    marginRight:"3em",
   },
},
leastNewsMargin:{
  marginRight:"8em",
  [theme.breakpoints.down("xs")]: {
    marginRight:"4em",
   },
}
});

class FooterView extends React.Component {

 

  render(){
    const { classes,theme } = this.props;
    console.log("state.contactDetails",this.props.companyDetails);
    const {companyName,contactDetails,addresses,body} = Object.assign({},...this.props.companyDetails);
  
    console.log("state.companyDetails",this.props.footerBgImage.imageUrl);
  
    return (

      <Grid  className={classes.background}  container justify="center" >
      <Grid item className={classes.paper} container  justify="center" >  
      <Container maxWidth="lg"   >   
            <Grid item container direction="row"    justify="space-between" className={classes.rowContaner} >
      
              <Grid item container direction="column" xs={12} sm={6} lg={3} >
              <Grid item >
                <Typography variant="h3" className={classes.h3ContainerMain}> 
                {companyName}
                </Typography>
                </Grid>
                  <Grid item >
                <Typography variant="body1"  style={{...theme.palette.typography.body1,}}> 
                {body}</Typography>
                </Grid>
                <Grid item >
               <IconButton >
               <FacebookIcon fontSize="inherit" color="primary"/>
               </IconButton>
               <IconButton >
               <TwitterIcon fontSize="inherit" color="primary"/>
               </IconButton>
                </Grid>
              </Grid>
      
              <Grid item container direction="column" xs={12} sm={6} lg={3}>
              <Grid item >
              <Typography variant="h3" className={classes.h3Container}> 
              {FooterUseFullLinks.Heading}
              </Typography>
              </Grid>
              <Grid item >
               {FooterUseFullLinks.links.map((link,index) => (
                   <Grid item key={`${link.linkName} ${index}`}>
                   <Typography variant="subtitle1"
                    className={classes.subtitle1Contaner} gutterBottom> 
                    {link.linkName}
                    </Typography>
                    </Grid>
               ))}
             </Grid>
              </Grid>
      
              <Grid item container direction="column" xs={12} sm={6} lg={3}>
              <Grid item >
              <Typography variant="h3" className={classes.h3Container}> 
              {FooterLatestNewsLinks.Heading}
              </Typography>
              <Grid item >
              {FooterLatestNewsLinks.links.map((link,index) => (
                  <Grid item className={classes.gridItemSpcing}  key={`${link.title} ${index}`}>
                      <Grid item >
                  <Typography variant="subtitle1"
                   className={classes.subtitle1Contaner} > 
                  { link.title}
                   </Typography>
                   </Grid>
                   <Grid item >
                   <Typography variant="subtitle2"
                   className={classes.subtitle2Contaner} > 
                   { link.subTitle}
                   </Typography>
                   </Grid>
                  </Grid>
               ))}
                 </Grid>
              </Grid>
              </Grid>
      
              <Grid item container direction="column" xs={12} sm={6} lg={3}>
              <Grid item >
                <Typography variant="h3" className={classes.h3Container}> 
                Contact
                </Typography>
                </Grid>
                <Grid item  >
                  <Grid item container>
                    <Grid item>
                     <PhoneIcon className={classes.iconContainer}/>
                    </Grid>
                    <Grid item >
                  <Typography variant="subtitle1"
                className={classes.subtitle1Contaner} style={{marginBottom:"1em"}}> 
                 {contactDetails.phone}
                 </Typography>
                 </Grid>
                  </Grid>
                  </Grid>
                  <Grid item container direction="column" >
                  <Grid item container>
                    <Grid item>
                    <MailOutlineIcon className={classes.iconContainer} />
                    </Grid>
                    <Grid item>
                  <Typography variant="subtitle1"
                className={classes.subtitle1Contaner} style={{marginBottom:"1em"}}> 
                {contactDetails.email}
                 </Typography>
                 </Grid>
                  </Grid>
                  </Grid>
                  <Grid item container direction="column" >
                  <Grid item container>
                    <Grid item>
                     <LocationOnIcon className={classes.iconContainer}/>
                    </Grid>
                    <Grid item>
                  <Typography variant="subtitle1"
                 className={classes.subtitle1Contaner} style={{maxWidth:"10em"}}> 
                 {addresses.addressline1},{addresses.addressline2},{addresses.citytown},{addresses.province}
               
                 </Typography>
                 </Grid>
                  </Grid>
                  </Grid>
                </Grid>
                </Grid>
      
              </Container>
            </Grid>
             
      </Grid>
    );
  }

}

const mapStateToProps = state => {

  return {
   companyDetails: Object.values(state.companyDetails),
   //contactDetails: _.pick(...Object.values(state.companyDetails.contactDetails), 'email', 'phone'),
   // addresses: _.pick(...Object.values(state.companyDetails.addresses), 'addressline1', 'citytown'),
    footerBgImage: _.pick(...Object.values(state.footerSection.footerBgImages).filter(item => item.active === true ), 'imageUrl', 'fileName'),  
    isLoading: _.some(_.values(state.pendingStates.GET_COMPANY_DETAILS)) 
  };
};

export default connect(mapStateToProps, {})(withTheme(withStyles(useStyles)(FooterView)));


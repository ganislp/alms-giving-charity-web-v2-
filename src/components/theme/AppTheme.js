import {createMuiTheme } from '@material-ui/core/styles';

const appWhite="#ffff";
const appBlue= "#0B72B9";
 const arcGrey = "#333";
 const lightGrey="#b7b7b7";
 const bgColour = '#edf3f5'
export default  createMuiTheme({
  
  palette:{
    common : {
      white : appWhite,
      blue:appBlue,
      grey : arcGrey,
      lightGrey: lightGrey,
      bgColour:bgColour
    },
    primary: {
      main : appWhite,
    },
    secondary :{
    main : appBlue
    } ,

  typography:{
    tab : {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "#333",
      fontSize: "1rem",
    },

    h6White : {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 600,
      color: appWhite,
      fontSize: "1rem",
    },

    caption:{
      color: appWhite,
    },
    submitButton: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      textTransform: "none",
      color: appBlue,
      backgroundColor: appBlue,
      "&:hover": {
        backgroundColor: arcGrey,
        color: appBlue,
      },
    
    },

    donateButton: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      border:"none",
      borderWidth: 0,
      textTransform: "none",
      color: appWhite,
      backgroundColor: arcGrey,
      "&:hover": {
        backgroundColor: arcGrey,
        color: appWhite,
      },
   
    },
  }
},
overrides: {    
  // MuiAppBar: {
  //  root: {paddingRight: 0, }

  // },

 
  
  MuiInputLabel:{
    root:{
     color:arcGrey,
     fontSize:"1rem",
    }  },
  // MuiInput:{
  //   root:{
  //    color:arcGrey,

  //   },
 
   underline:{
     "&:before":{
       borderBottem:`2px solid ${arcGrey}`
     },
     "&:hover:not($disabled):not($focused):not($error):before":{
       borderBottem:`2px solid ${arcGrey}`
     }
   }
  

}
});
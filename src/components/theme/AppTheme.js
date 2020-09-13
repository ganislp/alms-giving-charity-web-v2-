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
      fontFamily: "Open Sans sans-serif",
      textTransform: "none",
      fontWeight: 400,
      color: appWhite,
      fontSize: "1.2rem",
    },

    body:{
      fontFamily: "Raleway",
      fontSize: "1rem",
      lineHeight: 1.5, 
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Raleway",
      fontSize: "1rem",
     color: appWhite,
     fontWeight: 100,
    },

    h1:{
      fontFamily: "Open Sans sans-serif",
      fontWeight: 600,
      lineHeight: 1,    
    },

    h3:{
      fontFamily: "Raleway",
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1,    
    },

    h6Grey : {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 600,
      color: arcGrey,
      fontSize: "1rem",
    },

    caption:{
      fontFamily: "Raleway",
      color: appWhite,
      fontSize: "1.2rem",
    },
    submitButton: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      textTransform: "none",
      color: appBlue,
      backgroundColor: appBlue,
      "&:hover": {
        backgroundColor: appBlue,
        color: appWhite,
      },
    },

    submitIconButton: {
      "&:hover": {
        backgroundColor: appBlue,
        color: appWhite,
      },
    },

    contentButtonMain: {
      // borderColor: appWhite,
      border:"none",
      borderWidth: 0,
      textTransform: "none",
      color: appWhite,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      backgroundColor: appBlue,
      "&:hover": {
        backgroundColor: appBlue,
        color: appWhite,
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

  // MUIDataTable: {
  //   root: {
  //   },
  //   responsiveScroll: {
  //     maxHeight: 'unset',
  //     overflowX: 'unset',
  //     overflowY: 'unset',
  //   },
  //   paper: {
  //     boxShadow: '0px',
  //   },
  // },
  // MuiTable: {
  //   root: {
  //     position: 'sticky',
  //     bottom: 0,
  //     background: 'white',
  //   },
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
  MuiFormLabel: {
    asterisk: {
    color: 'red',
    }
  },
   underline:{
     "&:before":{
       borderBottem:`2px solid ${arcGrey}`
     },
     "&:hover:not($disabled):not($focused):not($error):before":{
       borderBottem:`2px solid ${arcGrey}`
     }
   },

   MuiTableSortLabel: {
    root: {
      '&:hover': {
        color: `${appWhite}`,
      },
    },
    active: {
      color: `${appWhite}`,
       '&:hover': {
        color: `${appWhite}`,
      },
    },
   },

   toolbarWrapper: {
    '& .MuiToolbar-gutters': {
        paddingLeft: 0,
        paddingRight: 0,
    }
    
},

}
});
import * as firebase from "firebase";

// import { FireSQL } from 'firesql';
const config = {
  apiKey: "AIzaSyBA2BoFv2IXHJZWb13tvwdEBlAk2klAS-s", 
  authDomain: "your-project.firebaseapp.com", 
  databaseURL: "https://alms-giving-global-charity.firebaseio.com/", 
  projectId: "alms-giving-global-charity", 
  storageBucket: "gs://alms-giving-global-charity.appspot.com", 
  messagingSenderId: "xxxxxxxxxxxx" 
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  }




export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const createdAt =  firebase.firestore.Timestamp.now()

// export const getAuthenticationStatus = () => {

//   return localStorage.getItem("isAuthenticated");

// };
// export const database = firebase.firestore();
//  export const storageRef = firebase.storage();

// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
// };
 
// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };
 
// const config =
//   process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

// class Firebase {

//   constructor() {
//     app.initializeApp(config);
//      /* Helper */
   
//      this.fieldValue = app.firestore.FieldValue;
//      this.arrayUnion = app.firestore.FieldValue.arrayUnion;
     
// /* Firebase APIs */
//     // this.auth = app.auth();
//     this.db = app.firestore();
//     this.storage = app.storage();
//     // this.fireSQL = new FireSQL(app.firestore(),{ includeId: 'fieldName'});
//   }
  
// //heroSection  = () => this.db.collection('heroSection');

// heroSection = () => this.db.collection('heroSection');
// getheroSection = () => this.db.doc('/heroSection/heroContent');
    
// }

//  // *** User API ***


// export default Firebase;
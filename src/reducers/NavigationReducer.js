import {ON_SELECT_APP_TAB,DRAWER_OPEN} from '../actions/actionTypes'

export const   selectdAppTabReducer = (selectdAppTab=0,action) => {
  switch (action.type) {
    case ON_SELECT_APP_TAB:
      return action.payload;      
      default:
        return selectdAppTab;
    }

}

export const   drawerOpenReducer = (drawerOpen=false,action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return action.payload;      
      default:
        return drawerOpen;
    }

}




// export const   fetchMediaQueryReducer = (state ={},action) => {
//   switch (action.type) {
//     case FETCH_MEDIA_QUERY:
//       return action.payload;
//       default:
//         return state;
//     }

// }
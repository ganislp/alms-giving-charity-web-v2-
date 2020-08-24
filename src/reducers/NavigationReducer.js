import {ON_SELECT_APP_TAB,DRAWER_OPEN} from '../actions/actionTypes/uiActionTypes'

export const   selectdAppTabReducer = (selectdTabValue=0,action) => {
  switch (action.type) {
    case ON_SELECT_APP_TAB:
      return action.payload;      
      default:
        return selectdTabValue;
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

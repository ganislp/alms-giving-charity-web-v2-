import {ON_SELECT_APP_TAB,DRAWER_OPEN,ON_CONFI_DIALOG_OPEN,ON_CONFI_DIALOG_CLOSE} from '../actions/actionTypes/uiActionTypes'

export const   selectdAppTabReducer = (selectdTabValue=0,action) => {
  switch (action.type) {
    case ON_SELECT_APP_TAB:
      return action.payload;      
      default:
        return selectdTabValue;
    }

};

export const   drawerOpenReducer = (drawerOpen=false,action) => {
  switch (action.type) {
    case DRAWER_OPEN:
      return action.payload;      
      default:
        return drawerOpen;
    }

};

export const   confDialogOpenReducer = (state={dialogOpen:false,uid:{}},action) => {
  switch (action.type) {
    case ON_CONFI_DIALOG_OPEN:
      return { ...state,...action.payload };;      
      default:
        return state;
    }

};


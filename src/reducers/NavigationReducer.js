import {ON_SELECT_APP_TAB,
  DRAWER_OPEN,
  ON_CONFI_DIALOG_OPEN,
  ON_POPOVER_DIALOG_OPEN} from '../actions/actionTypes/uiActionTypes'

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

export const   confDialogOpenReducer = (state={open:false,heroListSeletedUid:{},heroImageSeletedUid:{}},action) => {
  switch (action.type) {
    case ON_CONFI_DIALOG_OPEN:
      return { ...state,...action.payload };     
      default:
        return state;
    }

};


export const   popOverDialogOpenReducer = (state={popOverOpen:false,anchorEl:null},action) => {
  switch (action.type) {
    case ON_POPOVER_DIALOG_OPEN:
      return { ...state,...action.payload };     
      default:
        return state;
    }

};


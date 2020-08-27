import {
  ON_SELECT_APP_TAB,
  DRAWER_OPEN,
  ON_CONFI_DIALOG_OPEN,
  ON_POPOVER_DIALOG_OPEN} from '../actionTypes/uiActionTypes'

export const headerMenutabAct = (selectdTabValue) => {
  return {
    type: ON_SELECT_APP_TAB,
    payload: selectdTabValue
}
};

export const drawerOpenAct = (drawerOpen) => {
  return {
    type: DRAWER_OPEN,
    payload: drawerOpen
}
};

export const confiDialogOpen = (dialogOpen,uid) => {
  return {
    type: ON_CONFI_DIALOG_OPEN,
    payload: {dialogOpen,uid:uid}
}
};

export const popOverDialogOpen = (popOverOpen,anchorEl,) => {
  return {
    type: ON_POPOVER_DIALOG_OPEN,
    payload: {popOverOpen,anchorEl}
}
}





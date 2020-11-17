import {
  ON_SELECT_APP_TAB,
  DRAWER_OPEN,
  ON_CONFI_DIALOG_OPEN,
  ON_POPOVER_DIALOG_OPEN,
  ON_PREVIEW_DIALOG_OPEN,
  ON_SELECT_SETTING_TAB

} from '../actionTypes/uiActionTypes'

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

export const confiDialogOpen = (dialogContent) => {
  return {
    type: ON_CONFI_DIALOG_OPEN,
    payload: {...dialogContent}
}
};

export const popOverDialogOpen = (popOverOpen,anchorEl,) => {
  return {
    type: ON_POPOVER_DIALOG_OPEN,
    payload: {popOverOpen,anchorEl}
}
};

export const previewDialogOpen = (previewOpen,uid) => {
  return {
    type: ON_PREVIEW_DIALOG_OPEN,
    payload: {previewOpen,uid}
}
};


export const headerSettingsMenutabAct = (selectdSettingsTabValue) => {
  return {
    type: ON_SELECT_SETTING_TAB,
    payload: selectdSettingsTabValue
}
};





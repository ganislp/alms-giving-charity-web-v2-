import {ON_SELECT_APP_TAB,DRAWER_OPEN} from './actionTypes'

export const selectdAppTab = (selectdTab) => {
  return {
    type: ON_SELECT_APP_TAB,
    payload: selectdTab
}
}

export const drawerOpenAct = (drawerOpen) => {
  return {
    type: DRAWER_OPEN,
    payload: drawerOpen
}
}


// export const fetchMediaQuery = (mediaQueryValus) => {
//   return {
//     type: FETCH_MEDIA_QUERY,
//     payload: mediaQueryValus
// }
// }
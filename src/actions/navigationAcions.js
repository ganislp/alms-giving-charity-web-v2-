import {ON_SELECT_APP_TAB} from './actionTypes'

export const selectdAppTab = (selectdTab) => {
  return {
    type: ON_SELECT_APP_TAB,
    payload: selectdTab
}
}



// export const fetchMediaQuery = (mediaQueryValus) => {
//   return {
//     type: FETCH_MEDIA_QUERY,
//     payload: mediaQueryValus
// }
// }
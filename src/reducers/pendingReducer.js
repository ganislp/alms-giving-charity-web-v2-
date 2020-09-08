import {getActionName} from '../actions/actionsHelper'

export default  (state = {}, action) => {
  const { type } = action;
  const actionName = getActionName(type);
  if (!actionName) {
    return {
      ...state
    };
  }

  if (type.endsWith('_REQUEST')) {
 
    return {
      ...state,
      [actionName]: {
        pending: true
      }
    };
  }

  if (type.endsWith('_SUCCESS') || type.endsWith('_FAILURE')) {
    return {
      ...state,
      [actionName]: {
        pending: false
      }
    };
  }

  return {
    ...state
  };
};
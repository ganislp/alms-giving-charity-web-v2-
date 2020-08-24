// actions/snackbarActions.js
export const showSnackbar = message => {
  return dispatch => {
    dispatch({ type: "OPEN_SNACKBAR", message });
  };
};

export const showSuccessSnackbar = message => {
  return dispatch => {
    dispatch({ type: "SUCCESS_SNACKBAR", message });
  };
};

export const showFaildSnackbar = message => {
  return dispatch => {
    dispatch({ type: "FAILED_SNACKBAR", message });
  };
};

export const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: "SNACKBAR_CLEAR" });
  };
};
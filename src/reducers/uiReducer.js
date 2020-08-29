const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        ...state,
        snackbarOpen:true,
        success: false,
        failed: false,
        successSnackbarMessage: action.message
      };
      case "SUCCESS_SNACKBAR":
      return {
        ...state,
        snackbarOpen:true,
        success: true,
        failed: false,
        successSnackbarMessage: action.message
      };

      case "WARNING_SNACKBAR":
        return {
          ...state,
          snackbarOpen:true,
          success: true,
          failed: false,
          successSnackbarMessage: action.message
        };

        case "INFO_SNACKBAR":
          return {
            ...state,
            snackbarOpen:true,
            success: true,
            failed: false,
            successSnackbarMessage: action.message
          };
      case "FAILED_SNACKBAR":
        return {
          ...state,
          snackbarOpen:true,
          success: false,
          failed: true,
          successSnackbarMessage: action.message
        };
    case "SNACKBAR_CLEAR":
      return {
        ...state,
        snackbarOpen: false,
        success: false,
        failed: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false
      };
    default:
      return state;
  }
};

export default uiReducer;
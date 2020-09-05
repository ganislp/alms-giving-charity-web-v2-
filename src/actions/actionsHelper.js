
export const getActionName = (actionType) => {
  if (typeof actionType !== 'string') {
    return null;
  }
//if(actionType === 'GET_HERO_CARD_REQUEST'){
  // console.log("actionType",actionType)
  // console.log("CREATE_HERO_CARD_REQUEST",actionType
  //   .split('_')
  //   .slice(0, -1)
  //   .join('_'))
//}
  return actionType
    .split('_')
    .slice(0, -1)
    .join('_');
}

export const createLoadingActionType = (suffix) => {
  return actionName => {
    return `${actionName}_${suffix}`;
  };
}

// const createRequestActionType = createLoadingActionType('REQUEST');
// const createSuccessActionType = createLoadingActionType('SUCCESS');
// const createFailureActionType = createLoadingActionType('FAILURE');

// const ACTIVE_IMAGE_TYPE = 'ACTIVE_IMAGE';

// export const ACTIVE_IMAGE_REQUEST = createRequestActionType(ACTIVE_IMAGE_TYPE);
// export const ACTIVE_IMAGE_SUCCESS = createSuccessActionType(ACTIVE_IMAGE_TYPE);
// export const ACTIVE_IMAGE_FAILURE = createFailureActionType(ACTIVE_IMAGE_TYPE);

// const INACTIVE_IMAGE_TYPE = 'IN_ACTIVE_IMAGE';

// export const INACTIVE_IMAGE_REQUEST = createRequestActionType(INACTIVE_IMAGE_TYPE);
// export const INACTIVE_IMAGE_SUCCESS = createSuccessActionType(INACTIVE_IMAGE_TYPE);
// export const INACTIVE_IMAGE_FAILURE = createFailureActionType(INACTIVE_IMAGE_TYPE);
import * as types from "./authActionTypes";

const initialState = {
  isUserSignedIn: false,
  isInProgress: false,
  hasError: false,
  errorMessage: ""
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        isUserSignedIn: true,
        isInProgress: false,
        ...action
      };
    case types.SIGNIN:
      return {
        ...state,
        isInProgress: true
      };
    case types.SIGNIN_ERROR:
      const { errorMessage } = action;
      return {
        ...state,
        hasError: true,
        errorMessage
      };
    default:
      return state;
  }
};

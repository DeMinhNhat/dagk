import * as types from "./usersActionTypes";

export const users = (state = {}, action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return {
        ...state,
        [action.uid]: {
          ...action.userPayload
        }
      };
    default:
      return state;
  }
};

export const user = (state = "null", action) => {
  switch (action.type) {
    case types.GET_CORELATED_USER:
      return action.uid;
    default:
      return state;
  }
};

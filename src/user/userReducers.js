import * as types from "./usersActionTypes";

export const users = (state = [], action) => {
  switch (action.type) {
    case types.GET_USERS:
      return [...state, action.user];
    default:
      return state;
  }
};

export const user = (state = "", action) => {
  switch (action.type) {
    case types.GET_CORELATED_USER:
      return action.user;
    default:
      return state;
  }
};

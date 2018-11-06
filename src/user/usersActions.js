import * as types from "./usersActionTypes";

export const addConnectedUser = ({ uid, userPayload }) => {
  return {
    type: types.USER_LOGGED_IN,
    uid,
    userPayload
  };
};

export const getCorelatedUser = uid => {
  return {
    type: types.GET_CORELATED_USER,
    uid
  };
};

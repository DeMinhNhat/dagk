import * as types from "../constants/authActionTypes";

// const initialState = {
//   isUserSignedIn: false
// };

export const auth = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        isUserSignedIn: true,
        ...action
      };
    case types.SIGNOUT_SUCCESS:
      return {
        ...state,
        isUserSignedIn: false,
        ...action
      };
    default:
      return state;
  }
};

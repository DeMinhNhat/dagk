import { signInSuccess } from "../actions/authActions";
import { getConnectedUsers } from "../actions/userActions";
import { getSentMessages } from "../actions/messageActions";

export const getStart = user => {
  return dispatch => {
    dispatch(signInSuccess(user));
    dispatch(getConnectedUsers());
    dispatch(getSentMessages());
  };
};

// export const reset = () => {
//   return dispatch => {
//     dispatch(signInSuccess());
//     dispatch(getConnectedUsers());
//     dispatch(getSentMessages());
//   };
// };

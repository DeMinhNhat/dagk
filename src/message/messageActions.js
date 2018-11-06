import firebase from "firebase";
import * as types from "./messageActionTypes";

export const retrieveMessage = ({
  id,
  uid,
  displayName,
  message,
  createdAt,
  to
}) => ({
  type: types.RETRIEVE_MESSAGE,
  id,
  uid,
  displayName,
  message,
  createdAt,
  to
});

export const sendMessageInProgress = payload => ({
  type: types.SEND_MESSAGE,
  ...payload
});

export const sendMessageSuccess = () => ({ type: types.SEND_MESSAGE_SUCCESS });

export const sendMessageError = () => ({ type: types.SEND_MESSAGE_ERROR });

export const sendMessage = message => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    const { displayName } = getState().users[uid];
    const to = getState().corelatedUser;

    dispatch(sendMessageInProgress({ uid, displayName, message, to }));

    if (uid !== 0) {
      firebase
        .database()
        .ref("messages")
        .push({
          uid,
          displayName,
          message,
          to,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        });
    } else {
      dispatch(sendMessageError());
    }
  };
};

import firebase from "firebase";
import * as types from "./messageActionTypes";

export const retrieveMessage = ({ uid, displayName, message, createdAt }) => ({
  type: types.RETRIEVE_MESSAGE,
  uid,
  displayName,
  message,
  createdAt
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

    dispatch(sendMessageInProgress({ uid, displayName, message }));

    if (uid !== 0) {
      firebase
        .database()
        .ref("messages")
        .push({
          uid,
          displayName,
          message,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        });
    } else {
      dispatch(sendMessageError());
    }
  };
};

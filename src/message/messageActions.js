import firebase from "firebase";
import * as types from "./messageActionTypes";

export const retrieveMessage = msg => ({
  type: types.RETRIEVE_MESSAGE,
  msg
});

export const getSentMessages = () => {
  return dispatch => {
    const messageQuery = firebase.database().ref("messages");
    messageQuery.on("child_added", snapshot => {
      const { uid, displayName, message, to, createdAt } = snapshot.val();
      const msg = { uid, displayName, message, to, createdAt };
      dispatch(retrieveMessage(msg));
    });
  };
};

export const sendMessageInProgress = msg => ({
  type: types.SEND_MESSAGE,
  msg
});

export const sendMessageSuccess = () => ({ type: types.SEND_MESSAGE_SUCCESS });

export const sendMessageError = () => ({ type: types.SEND_MESSAGE_ERROR });

export const sendMessage = message => {
  return (dispatch, getState) => {
    const { uid, displayName } = getState().auth;
    const to = getState().corelatedUser.uid;
    const msg = { uid, displayName, message, to };

    dispatch(sendMessageInProgress(msg));

    if (uid !== 0) {
      const messageQuery = firebase.database().ref("messages");
      messageQuery.push({
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

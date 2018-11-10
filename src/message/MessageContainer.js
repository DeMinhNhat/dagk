import { connect } from "react-redux";
import MessageComponent from "./messageComponent";
import { sendMessage } from "./messageActions";

const mapStateToProps = state => ({
  auth: state.auth,
  messages: state.messages,
  userMessage: state.userMessage,
  corelatedUser: state.corelatedUser
});

export default connect(mapStateToProps, {
  sendMessage: sendMessage
})(MessageComponent);

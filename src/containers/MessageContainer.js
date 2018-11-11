import { connect } from "react-redux";
import MessageComponent from "../components/messageComponent";
import { sendMessage } from "../actions/messageActions";

const mapStateToProps = state => ({
  auth: state.auth,
  messages: state.messages,
  userMessage: state.userMessage,
  corelatedUser: state.corelatedUser
});

export default connect(mapStateToProps, {
  sendMessage: sendMessage
})(MessageComponent);

import { connect } from "react-redux";
import MessageComponent from "../components/messageComponent";
import * as messageActions from "../actions/messageActions";

const mapStateToProps = state => ({
	auth: state.auth,
	messages: state.messages,
	userMessage: state.userMessage,
	corelatedUser: state.corelatedUser
});

export default connect   (mapStateToProps, {
	sendMessage: messageActions.sendMessage,
	getSentMessages: messageActions.getSentMessages
})(MessageComponent);

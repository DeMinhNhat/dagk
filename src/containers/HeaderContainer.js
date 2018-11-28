import { connect } from "react-redux";
import HeaderComponent from "../components/HeaderComponent";
import * as authActions from "../actions/authActions";

const mapStateToProps = state => ({
	corelatedUser: state.corelatedUser,
	auth: state.auth
});

const HeaderContainer = connect(mapStateToProps, {
	onSignOut: authActions.onSignOut,
	signInSuccess: authActions.signInSuccess,
})(HeaderComponent);

export default HeaderContainer;

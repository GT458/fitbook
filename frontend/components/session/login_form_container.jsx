import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";


const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login',
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  signUpForm: (user) => dispatch(signup(user)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(LoginForm);
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getCurrentUser } from "../../actions/user_actions";
import NavBar from "./nav_bar";


const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: () => dispatch(getCurrentUser())
});

export default connect(mSTP, mDTP)(NavBar);
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getAllUsers, getCurrentUser } from "../../actions/user_actions";
import { getRequestsReceived } from "../../reducers/selectors/friend_request_selector";
import NavBar from "./nav_bar";


const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  incomingFriendRequests: getRequestsReceived(state.session.id, state.entities.friend_requests)
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: () => dispatch(getCurrentUser()),
  getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mSTP, mDTP)(NavBar);
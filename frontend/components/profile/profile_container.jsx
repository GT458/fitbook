import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import Profile from './profile';
import { openCoverPhotoModal, openEditModal, openProfilePictureModal } from '../../actions/modal_actions';
import { createFriendRequest, fetchAllFriendRequests } from '../../actions/friend_request_actions';
import { getRequestsSent } from '../../reducers/selectors/friend_request_selector';

const mSTP = (state, ownProps) => {
  // debugger
  return ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
    modal: state.ui.modal,
    currentUserFriendRequests: getRequestsSent(state.session.id, state.entities.friend_requests)
  })
};
// TODO: add get all friends here as well
const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
  openEditModal: (modal) => dispatch(openEditModal(modal)),
  openCoverPhotoModal: (modal) => dispatch(openCoverPhotoModal(modal)),
  openProfilePictureModal: (modal) => dispatch(openProfilePictureModal(modal)),
  createFriendRequest: friend_request => dispatch(createFriendRequest(friend_request)),
  fetchAllFriendRequests: () => dispatch(fetchAllFriendRequests()),
  
});


export default connect(mSTP, mDTP)(Profile);
/*
First, when component renders, it needs to fetchUser(userid) because we need to update our state with the user we need.
This allows currentUser: state.entities.users to work. We do the first step in componentDidUpdate Or render or whatever

What we need to achieve above:
A users action file that has a way to fetchUser(id) <- action creator, and then we need an action getUser to listen for. Our action creator func fetchUser
will call a UserAPIUtil ajax that gets the user based off ID from our database. Yes. 

*user_actions.js
-> const getUser

-const fetchUser()

*user_api_util.js
  ajax call fetchUser(id)

  Now in our props we have currentUser, and user_action fetchUser(id), we can now render the component with necessary details :)))
*/
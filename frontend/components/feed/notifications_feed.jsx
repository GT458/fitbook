import React from 'react';
import {connect} from 'react-redux';
import { getRequestsReceived } from '../../reducers/selectors/friend_request_selector';
import { createFriend } from '../../actions/friend_actions';
import { deleteFriendRequest } from '../../actions/friend_request_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  incomingFriendRequests: getRequestsReceived(state.session.id, state.entities.friend_requests),

})

const mDTP = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
  deleteFriendRequest: id => dispatch(deleteFriendRequest(id))
})

class NotificationsFeed extends React.Component {


  constructor(props) {
    super(props);
  }

  
  render() {
    if ( this.props.incomingFriendRequests === undefined) {
      null;
    }
    let friendRequests = this.props.incomingFriendRequests.map((friendRequest, idx) => {
      let requester = this.state.users[friendRequest.requester_id];
      return (
        <div className='friend-req-container' key={idx}>
          <div className='friend-req-header'>
            <p>{requester.fname}</p>
          </div>
          <div className='friend-req-body'>
            <button onClick={() => this.props.createFriend({friend: {user_id1: requester.id, user_id2: this.props.currentUser.id}})}className='accept-fr'>Accept</button>
            <button onClick={() => this.props.deleteFriendRequest(friendRequest.id)}className='decline-fr'>Decline</button>
          </div>
        </div>
      )
    })

    return (
      <div className='notifications-container'>
        <div className='notifications-header'>
          {/* Notification header here */}
        </div>
        <div className='notifications-body'>
          {friendRequests}
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(NotificationsFeed);
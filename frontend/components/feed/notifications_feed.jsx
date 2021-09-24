import React from 'react';
import {connect} from 'react-redux';
import { getRequestsReceived } from '../../reducers/selectors/friend_request_selector';
import { createFriend } from '../../actions/friend_actions';
import { deleteFriendRequest } from '../../actions/friend_request_actions';
import { getUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  incomingFriendRequests: getRequestsReceived(state.session.id, state.entities.friend_requests),
  users: state.entities.users
})

const mDTP = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
  deleteFriendRequest: id => dispatch(deleteFriendRequest(id)),
  getUser: id => dispatch(getUser(id))
})

class NotificationsFeed extends React.Component {

  componentDidMount() {
    
    this.props.incomingFriendRequests.forEach(fr => {
      this.props.getUser(fr.requester_id);
      this.props.getUser(fr.requestee_id);
    })
    // debugger;
  }
  constructor(props) {
    super(props);
  }

  
  render() {
    if ( this.props.incomingFriendRequests === undefined || this.props.users === undefined) {
      null;
    }
    let friendRequests = this.props.incomingFriendRequests.map((friendRequest, idx) => {
      let requester = this.props.users[friendRequest.requester_id];
      // debugger;
      return (
        <div className='friend-req-container' key={idx}>
          <div className='friend-req-header'>
            <p>{requester !== undefined ? requester.fname : null}</p>
          </div>
          <div className='friend-req-body'>
            <button onClick={() => {
                  this.props.createFriend({friend: {user_id1: requester.id, user_id2: this.props.currentUser.id}}) 
                  this.props.deleteFriendRequest(friendRequest.id)
                }
              }className='accept-fr'>Accept</button>
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
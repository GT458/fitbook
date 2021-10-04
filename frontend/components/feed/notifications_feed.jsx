import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getRequestsReceived } from '../../reducers/selectors/friend_request_selector';
import { createFriend } from '../../actions/friend_actions';
import { deleteFriendRequest } from '../../actions/friend_request_actions';
import { getUser } from '../../actions/user_actions';
import { formatFullName } from '../../util/format_name';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  //incomingFriendRequests: getRequestsReceived(state.session.id, state.entities.friend_requests),
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
      //this.props.setNotifsIndicator(false);
      null;
    } else {
      //this.props.setNotifsIndicator(true);
    }

    // if (this.props.incomingFriendRequests.length < 1) {
    //   this.props.setNotifsIndicator(false);
    // } else {
    //   this.props.setNotifsIndicator(true);
    // }
    let friendRequests = this.props.incomingFriendRequests.map((friendRequest, idx) => {
      let requester = this.props.users[friendRequest.requester_id];
      // debugger;
      return (
        

        
        <div className='friend-req-container' key={idx}>
          <div className='friend-req-header'>
            {requester !== undefined ? <Link to={`/users/${requester.id}`}> <img src={requester.profile_photo}></img></Link>: null}
          </div>
          <div className='friend-req-body'>
            {requester !== undefined ? <p><Link to={`/users/${requester.id}`}>{formatFullName(requester.fname, requester.lname)}</Link></p> : null} 
            <div className='friend-btns'>
              <button onClick={() => {
                    this.props.createFriend({friend: {user_id1: requester.id, user_id2: this.props.currentUser.id}}) 
                    this.props.deleteFriendRequest(friendRequest.id)
                  }
                }className='accept-fr'>Accept</button>
              <button className='decline-fr' onClick={() => this.props.deleteFriendRequest(friendRequest.id)}className='decline-fr'>Decline</button>

            </div>
          </div>
        </div>
       
      )
    })

    return (
      <div className='notifs-bg' onClick={() => this.props.setNotification()}>
      <div className='notifications-container'>
        <div className='notifications-header'>
          <h1>Notifications</h1>
        </div>
        <div className='notifications-body'>
          {friendRequests.length >= 1 ? friendRequests : <div>No notifications</div>}
        </div>
      </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(NotificationsFeed);
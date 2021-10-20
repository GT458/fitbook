import React from 'react';


class ProfileHeader extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let user = this.props.user;
    let currentUserFriendRequests = this.props.currentUserFriendRequests;
    let profileUserFriendRequests = this.props.profileUserFriendRequests;
    let currentUserFriends = this.props.currentUserFriends;
    let profileUserFriends = this.props.profileUserFriends;
    let friendButton = () => {

      if (profileUserFriendRequests.length >= 1) {
        for (let i = 0; i < profileUserFriendRequests.length; i++) {
          if (profileUserFriendRequests[i].requestee_id === this.props.currentUser.id) {
            return <><button className='accept-fr-btn' onClick={() => {
              this.props.createFriend({friend: {user_id1: user.id, user_id2: this.props.currentUser.id}})
              this.props.deleteFriendRequest(profileUserFriendRequests[i].id)
          }  
          }>Accept</button><button onClick={() => this.props.deleteFriendRequest(profileUserFriendRequests[i].id)}
          className='delete-fr-btn'>Decline</button></>
          }
          
        }        
      }

      if (currentUserFriendRequests.length >= 1) {
        for (let i = 0; i < currentUserFriendRequests.length; i++) {
          if (currentUserFriendRequests[i].requestee_id === user.id) {
            return <button className='pending-fr-btn' onClick={() => this.props.deleteFriendRequest(currentUserFriendRequests[i].id)}></button>
          }
          
        }
      }

      if (currentUserFriends.length >= 1) {
        for (let i = 0; i < currentUserFriends.length; i++) {
          if (currentUserFriends[i].user_id2 === user.id || currentUserFriends[i].user_id1 === user.id) {
            // debugger;
            return <button className='remove-fr-btn' onClick={() => this.props.deleteFriend(currentUserFriends[i].id)}>Remove Friend</button>
          }
        }
      }
      return <button onClick={() => this.props.createFriendRequest({friend_request: {requester_id: this.props.currentUser.id, requestee_id: user.id}})}>Add Friend</button>
    }
    return (
    <div className='name-photo-container'>
      <div className='profile-picture'>
          <img src={this.props.user.profile_photo} alt='profile-photo'></img> {/* TODO: IMPORT PHOTO FROM AWS, USE DEFAULT PHOTO*/}
          {/* <button onClick={e => this.props.openProfilePictureModal(this.props.modal)}>E</button> */}
          {this.props.user.id === this.props.currentUser.id ? 
            <button onClick={e => this.props.openProfilePictureModal(this.props.modal)}></button>
            :
            null
          }
      </div>
      <div className='name-header'>
        <h2 className='profile-name'>{`${(user.fname[0].toUpperCase()) + user.fname.slice(1)} ${(user.lname[0].toUpperCase()) + user.lname.slice(1)}`}</h2>
        <span className='friend-count'>{profileUserFriends.length} {profileUserFriends.length === 1 ? 'friend':'friends'}</span>
      </div>
      <div className='profile-button'>
        {this.props.user.id === this.props.currentUser.id ? 
          <button onClick={e => this.props.openEditModal(this.props.modal)}>Edit Profile</button>
        : friendButton() }
      </div>
    </div>
    );
  }
}

export default ProfileHeader;
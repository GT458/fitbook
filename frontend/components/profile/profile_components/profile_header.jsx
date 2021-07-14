import React from 'react';


class ProfileHeader extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let user = this.props.user;
    
    return (
    <div className='name-photo-container'>
      <div className='profile-picture'>
          <img src={this.props.user.profile_photo} alt='profile-photo'></img> {/* TODO: IMPORT PHOTO FROM AWS, USE DEFAULT PHOTO*/}
          {/* <button onClick={e => this.props.openProfilePictureModal(this.props.modal)}>E</button> */}
          {this.props.user.id === this.props.currentUser.id ? 
            <button onClick={e => this.props.openProfilePictureModal(this.props.modal)}>E</button>
            :
            null
          }
      </div>
      <div className='name-header'>
        <h2 className='profile-name'>{`${(user.fname[0].toUpperCase()) + user.fname.slice(1)} ${(user.lname[0].toUpperCase()) + user.lname.slice(1)}`}</h2>
        <span className='friend-count'>0 friends</span>
      </div>
      <div className='profile-button'>
        {this.props.user.id === this.props.currentUser.id ? 
        <button onClick={e => this.props.openEditModal(this.props.modal)}>Edit Profile</button> 
        
        : <button>Add Friend</button>}
      </div>
    </div>
    );
  }
}

export default ProfileHeader;
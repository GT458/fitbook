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
        <img src='http://www.thisblogrules.com/wp-content/uploads/2010/02/batman-for-facebook.jpg' alt='profile-photo'></img> {/* TODO: IMPORT PHOTO FROM AWS, USE DEFAULT PHOTO*/}
      </div>
      <div className='name-header'>
        <h2 className='profile-name'>{`${user.fname} ${user.lname}`}</h2>
        <span className='friend-count'>0 friends</span>
      </div>
      <div className='edit-profile-button'>
        <button>Edit Profile</button>
      </div>
    </div>
    );
  }
}

export default ProfileHeader;
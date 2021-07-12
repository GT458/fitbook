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
          <img src={'https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/78117715_3302453119826931_6725932744179712000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=67GSNo2B_IEAX_LuFnV&_nc_oc=AQkj2xKG2b0cJ4RkfERvJ-kt_JMAJrqP790jFTO8r0mNY681bo9g3arXIBY9jxFY2a4&_nc_ht=scontent-iad3-1.xx&oh=38393f8d80a6cc51ed2cd22cf1a65e9c&oe=60F03844'} alt='profile-photo'></img> {/* TODO: IMPORT PHOTO FROM AWS, USE DEFAULT PHOTO*/}
      </div>
      <div className='name-header'>
        <h2 className='profile-name'>{`${(user.fname[0].toUpperCase()) + user.fname.slice(1)} ${(user.lname[0].toUpperCase()) + user.lname.slice(1)}`}</h2>
        <span className='friend-count'>0 friends</span>
      </div>
      <div className='profile-button'>
        {this.props.user.id === this.props.currentUser.id ? <button onClick={e => this.props.openEditModal(this.props.modal)}>Edit Profile</button> : <button>Add Friend</button>}
      </div>
    </div>
    );
  }
}

export default ProfileHeader;
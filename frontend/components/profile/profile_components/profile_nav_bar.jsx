import React from 'react';

class ProfileNavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className='profile-nav-bar'>
        <ul className='navigation-bar'>
          <button>Posts</button>
          <button>About</button>
          <button>Friends</button>
          <button>Photos</button>
        </ul>
      </div>
    );
  }
}

export default ProfileNavBar;
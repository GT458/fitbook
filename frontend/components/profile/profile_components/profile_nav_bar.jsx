import React from 'react';

class ProfileNavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className='profile-nav-bar'>
        <ul className='navigation-bar'>
          <button onClick={() => this.props.handleButtonClick('posts') } value='posts'>Posts</button>
          <button onClick={() => this.props.handleButtonClick('about')} value='about'>About</button>
          <button onClick={() => this.props.handleButtonClick('friends')} value='friends'>Friends</button>
          <button onClick={() => this.props.handleButtonClick('photos')} value='photos'>Photos</button>
        </ul>
      </div>
    );
  }
}

export default ProfileNavBar;
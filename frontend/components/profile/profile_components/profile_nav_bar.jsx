import React from 'react';

class ProfileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'posts'
    }
    this.callTwoFuncs = this.callTwoFuncs.bind(this);
  }

  callTwoFuncs(pageType) {
    this.props.handleButtonClick(pageType);
    this.setState({selected: pageType})
  }

  render() {
    return(
      <div className='profile-nav-bar'>
        <div className='prof-nav-container'>
        <ul className='navigation-bar'>
          <button className={this.state.selected === 'posts' ? 'isActive' : 'notActive'} onClick={() => this.callTwoFuncs('posts') } value='posts'>Posts</button>
            <button className={this.state.selected === 'about' ? 'isActive' : 'notActive'} onClick={() => this.callTwoFuncs('about')} value='about'>About</button>
            <button className={this.state.selected === 'friends' ? 'isActive' : 'notActive'} onClick={() => this.callTwoFuncs('friends')} value='friends'>Friends</button>
            <button className={this.state.selected === 'photos' ? 'isActive' : 'notActive'} onClick={() => this.callTwoFuncs('photos')} value='photos'>Photos</button>
        </ul>

        </div>
      </div>
    );
  }
}

export default ProfileNavBar;
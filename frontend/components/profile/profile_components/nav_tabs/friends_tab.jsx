import React from 'react';


class FriendsTab extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='about-tab'>
        <div className='content-display'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s friends</h2>
          <div className='friends-content'>
            0 friends :(
          </div>
        </div>
      </div>
    )
  }
}

export default FriendsTab;
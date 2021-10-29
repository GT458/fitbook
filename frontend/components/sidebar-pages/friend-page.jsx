import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { formatFullName } from '../../../../util/format_name';
import FriendsIndex from '../friends_index';

class FriendsPage extends React.Component {

  componentDidMount() {
    
  }
  constructor(props) {
    super(props);
  }



  render() {
    //debugger;
    if (this.props.friends === undefined) {
      return (<div className='friends-page'>
        <div className='content-display'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s friends</h2>
          <div className='friends-content'>
            No Friends
          </div>
        </div>
      </div> )
    }
    // debugger;
    //debugger;
    let friends = this.props.friends.map((friend, idx) => {
      let friendId = 0;
      if (friend.user_id1 !== this.props.user.id) {
        friendId = friend.user_id1;
      } else {
        friendId = friend.user_id2;
      }
      //debugger;
      return <FriendsIndex handleButtonClick={this.props.handleButtonClick} friendId={friendId} key={idx}/>
    })
   //debugger;
    return (
      <div className='about-tab'>
        <div className='content-display friends'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s friends</h2>
          <div className='friends-content'>
            {friends}
          </div>
        </div>
      </div>
    )
  }
}

export default FriendsPage;
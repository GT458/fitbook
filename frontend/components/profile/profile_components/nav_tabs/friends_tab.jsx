import React from 'react';
import {Link} from 'react-router-dom';
import { formatFullName } from '../../../../util/format_name';
import FriendsIndex from '../friends_index';

class FriendsTab extends React.Component {

  componentDidMount() {
    
  }
  constructor(props) {
    super(props);
  }



  render() {
    //debugger;
    if (this.props.friends === undefined) {
      return (<div className='about-tab'>
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
      return <FriendsIndex friend={friend} />
    })
    return (
      <div className='about-tab'>
        <div className='content-display'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s friends</h2>
          <div className='friends-content'>
            {friends}
          </div>
        </div>
      </div>
    )
  }
}

export default FriendsTab;
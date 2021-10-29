import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { formatFullName } from '../../../../util/format_name';
import FriendsIndex from '../friends_index';
import { getFriends } from '../../reducers/selectors/friend_selector';
import { getUser } from '../../actions/user_actions';
const mSTP = state => ({
  user: state.entities.users[state.session.id],
  friendsriends: getFriends(state.session.id, state.entities.friends),
  users: state.entities.users
})

const mDTP = dispatch => ({
  getUser: id => dispatch(getUser(id))
})


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
      let user = this.props.user[friendId];
      return (//<FriendsIndex friendId={friendId} key={idx}/>
        <div className='user-card-container' key={idx}>
          <div className='user-card-header'>
        <Link to={`/users/${friendId}`}><img src={user.profile_photo} className='user-img'></img>
          
        </Link>
          </div>
          <div className='user-card-body'>
            <Link to={`/users/${friendId}`}>{formatFullName(user.fname,user.lname)}</Link>
          </div>
        </div>
        )
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

export default connect(mSTP, mDTP)(FriendsPage);
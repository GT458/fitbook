import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../actions/user_actions';
import { Link } from 'react-router-dom';
import { formatFullName } from '../../../util/format_name';
const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.friendId]
})



const mDTP = dispatch => ({
  getUser: id => dispatch(getUser(id))
})


class FriendsIndex extends React.Component {

  componentDidMount() {
    if (!this.props.user) {
      this.props.getUser(this.props.friendId)
    }
  }
  constructor(props) {
    super(props);
  }


  render() {

    if (!this.props.user) {
      return null;
    }
    //debugger;
    
    
    return (
      <div className='user-card-container' key={this.props.idx}>
          <div className='user-card-header'>
        <Link onClick={() => this.props.handleButtonClick('posts')} to={`/users/${this.props.friendId}`}><img src={this.props.user.profile_photo} className='user-img'></img>
          
        </Link>
          </div>
          <div className='user-card-body'>
            <Link onClick={() => this.props.handleButtonClick('posts')}to={`/users/${this.props.friendId}`}>{formatFullName(this.props.user.fname,this.props.user.lname)}</Link>
          </div>
        </div>
    )
  }
}


export default connect(mSTP, mDTP)(FriendsIndex);
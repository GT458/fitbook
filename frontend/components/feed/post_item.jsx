import { connect } from "react-redux";
import React from 'react';
const mSTP = state => ({

})

const mDTP = dispatch => ({

})

class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='post-container'>
      <div className='post-top'>
        <div className='thumbnail'>
            <img src={this.props.user.profile_photo}></img>
            
        </div>
        <div className='post-user-name'>
          {this.props.user.fname}
        </div>
      </div>
      <div className='post-body'>
        <div className='body'>
          {this.props.post.body}
        </div>
      </div>
    </div>)
  }
}

export default connect(mSTP, mDTP)(PostItem);




import { connect } from "react-redux";
import React from 'react';
import { openModal } from "../../actions/modal_actions";
import { getUser } from "../../actions/user_actions";
import { formatFullName } from "../../util/format_name";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.post.author_id]
})

const mDTP = dispatch => ({
  getUser: (id) => dispatch(getUser(id))
})



class PostItem extends React.Component {
  
  componentDidMount() {
    if (!this.props.author) {

      this.props.getUser(this.props.post.author_id)
    }
  }
  constructor(props) {
    super(props);
    
  }

  render() {
    if (!this.props.author) {
      return null;
    }
    return (
    <div className='post-container'>
      <div className='post-top'>
        <div className='thumbnail'>
            <img src={this.props.author.profile_photo}></img>
            
        </div>
        <div className='post-user-name'>
          {formatFullName(this.props.author.fname, this.props.author.lname)}
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




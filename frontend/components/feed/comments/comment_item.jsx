import React from 'react';
import { connect } from "react-redux";
import { updateComment, deleteComment } from '../../../actions/comment_actions';
import { getUser } from '../../../actions/user_actions';
import { Link } from 'react-router-dom';
import { formatFullName } from '../../../util/format_name';
const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.comment.author_id],

})

const mDTP = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  getUser: id => dispatch(getUser(id))
})

class CommentItem extends React.Component {

  componentDidMount() {
    if (!this.props.author) {
      this.props.getUser(this.props.comment.author_id)
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      author_id: 0,
      post_id: 0,

    }
  }

  render() {
    return (
      <div className='comment-container'>
        <div className='profile-picture'>
          <Link to={`users/${this.props.author.id}`}>
        <img src={`${this.props.author.profile_photo}`}></img>
        </Link>
        </div>
        <div className='comment-content'>
          <div className='author-name'>
            <h1>{formatFullName(this.props.author.fname, this.props.author.lname)}</h1>
          </div>
          <div className='comment-body'>
            <p>{this.props.comment.body}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CommentItem);
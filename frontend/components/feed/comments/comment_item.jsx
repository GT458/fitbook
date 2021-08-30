import React from 'react';
import { connect } from "react-redux";
import { getCommentsByPostId } from '../../../reducers/selectors/comment_selector';
import { updateComment, deleteComment } from '../../../actions/comment_actions';


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.author.id],

})

const mDTP = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
})

class CommentItem extends React.Component {


  constructor(props) {
    super(props);
  }


}

export default connect(mSTP, mDTP)(CommentItem);
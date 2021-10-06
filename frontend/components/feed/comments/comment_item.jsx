import React from 'react';
import { connect } from "react-redux";
import { updateComment, deleteComment, fetchComment } from '../../../actions/comment_actions';
import { getUser } from '../../../actions/user_actions';
import { Link } from 'react-router-dom';
import { formatFullName } from '../../../util/format_name';
import EditCommentInput from './edit_comment_input';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.comment.author_id],

})

const mDTP = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  getUser: id => dispatch(getUser(id)),
  fetchComment: commentId => dispatch(fetchComment(commentId))
})

class CommentItem extends React.Component {

  componentDidMount() {
    if (!this.props.author) {
      this.props.getUser(this.props.comment.author_id)
    }
    this.setState({
      body: this.props.comment.body
    })
  }

  

  
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      body: '',
      author_id: 0,
      post_id: 0,
      showOptions: false,
      isEditing: false
    }

    this.showCommentOptions = this.showCommentOptions.bind(this);
    this.setEditingState = this.setEditingState.bind(this);
    this.setFalse = this.setFalse.bind(this);
  }
  showCommentOptions() {
    console.log('open comment options');
    this.setState({
      showOptions: true
    })
    
  }
  setFalse() {
    this.setState({
      isEditing: false
    })
  }
  setEditingState(body) {
    this.setState({
      isEditing: false
    })
    this.setState({
      body: body
    })
  }
  editCommentInput(commentId) {
    this.setState({
      isEditing: true,
      showOptions: false
    })
  }
  render() {
    if (!this.props.author) {
      return null;
    }
    return (
      <>
      
      {this.state.isEditing ?  <EditCommentInput setFalse={this.setFalse} setEditingState={this.setEditingState} comment={this.props.comment}updateComment={this.props.updateComment} />:  
      <div className='comment-container'>
        
        <div className='profile-picture'>
          <Link to={`users/${this.props.author.id}`}>
        <img src={`${this.props.author.profile_photo}`}></img>
        </Link>
        </div>
        <div className='comment-content'>
          <div className='author-name'>
            <h1>{formatFullName(this.props.author.fname, this.props.author.lname)}</h1>
            <span>{this.props.comment.created_at}</span>
          </div>
          <div className='comment-body'>
            <p>{this.state.body}</p>
          </div>
        </div>
        {this.props.author.id === this.props.currentUser.id ? <div onClick={() => this.showCommentOptions()} className='comment-options-btn'><img src='https://i.ibb.co/7brv7Jz/three-dots.png'></img></div> : null }
        {this.state.showOptions ? <> <div className='show-comment-optns-outer' onClick={() => this.setState({ showOptions: false })}></div><div className='comment-options'>
          
          <div className='delete-comment-btn optn' onClick={() => this.props.deleteComment(this.props.comment.id)}>Delete Comment</div>
          <div className='edit-comment-btn optn' onClick={() => this.editCommentInput(this.props.comment.id)}>Edit Comment</div>
          <div className='arrow-top'> </div>
        </div> </> : null}
       
      </div> } </>
      
    )
  }
}

export default connect(mSTP, mDTP)(CommentItem);
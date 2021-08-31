import { connect } from "react-redux";
import React from 'react';
import { editPostModal, openModal } from "../../actions/modal_actions";
import { getUser } from "../../actions/user_actions";
import { formatFullName } from "../../util/format_name";
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/post_actions';
import CommentItem from "./comments/comment_item";
import CreateComment from "./comments/create_comment";
import modal from "../session/modal";
import { getCommentsByPostId } from "../../reducers/selectors/comment_selector";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.post.author_id],
  modal: state.ui.modal,
  comments: getCommentsByPostId(ownProps.post.id, state.entities.comments)
})

const mDTP = dispatch => ({
  getUser: (id) => dispatch(getUser(id)),
  deletePost: (id) => dispatch(deletePost(id)),
  openEditModal: (modal, id) => dispatch(editPostModal(modal, id))
})



class PostItem extends React.Component {
  
  componentDidMount() {
    if (!this.props.author) {

      this.props.getUser(this.props.post.author_id)
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    }
    this.showPostOptions = this.showPostOptions.bind(this);
  }
  showPostOptions() {
    this.setState({
      showOptions: true
    })
  }
  render() {
    if (!this.props.author) {
      return null;
    }
    let commentsArr;
    if (this.props.comments) {
        this.props.comments.forEach(comment => {
          commentsArr.push(<CommentItem comment={comment}/>)
        })
    }
    return (
    
    <div className='post-container'>
        
      <div className='post-top' >
        {this.props.currentUser.id === this.props.author.id ? <div className='post-options-btn' onClick={this.showPostOptions}><img src='https://github.com/GT458/fitbook/blob/main/app/assets/images/three-dots.png'></img></div> : null}
        
        {this.state.showOptions ? <> <div className='show-post-outer' onClick={() => this.setState({ showOptions: false })}></div> 
        <div className='post-options'>
          <div className='delete-post-btn' onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</div>
          <div className='edit-post-btn' onClick={() => this.props.openEditModal(this.props.modal, this.props.post.id)}>Edit Post</div>
        </div> </>: null}
        
        
        <div className='thumbnail'>
          <Link to={`/users/${this.props.author.id}`}> 
            <img src={this.props.author.profile_photo}></img>
            </Link>
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
        <div className='post-photo'>
          {this.props.post.photo ? <img src={this.props.post.photo}></img> : null}
        </div>
        {commentsArr.length > 0 ? commentsArr : null}
        {<CreateComment post_id={this.props.post.id} />}
    </div>)
  }
}

export default connect(mSTP, mDTP)(PostItem);




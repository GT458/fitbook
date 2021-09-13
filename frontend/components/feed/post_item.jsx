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
import { getLikesByPostId } from "../../reducers/selectors/like_selector";
import { deleteLike, createLike } from "../../actions/like_actions";
const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.post.author_id],
  modal: state.ui.modal,
  comments: getCommentsByPostId(ownProps.post.id, state.entities.comments),//state.entities.posts[ownProps.post.id].comments ? state.entities.posts[ownProps.post.id].comments : [{id: 0, body: 'none', post_id: 1, author_id: 1}]//ownProps.post.comments //? ownProps.post.comments : [{id: 0, body: 'none', post_id: 1, author_id: 1}],
  likes: getLikesByPostId(ownProps.post.id, state.entities.likes)
  // getCommentsByPostId(ownProps.post.id, state.entities.comments)
})

const mDTP = dispatch => ({
  getUser: (id) => dispatch(getUser(id)),
  deletePost: (id) => dispatch(deletePost(id)),
  openEditModal: (modal, id) => dispatch(editPostModal(modal, id)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),

})



class PostItem extends React.Component {
  
  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes:  this.props.likes,
      postIsLiked: false
    })

    if (!this.props.author) {

      this.props.getUser(this.props.post.author_id)
    } 
  }
  
  componentDidUpdate(prevProps) {
    // debugger;
    if (prevProps.comments.length !== this.props.comments.length) {
      // debugger;
      this.setState({
        comments: this.props.comments
      })
    }

    if (prevProps.likes.length !== this.props.likes.length) {
      this.setState({
        likes: this.props.likes
      })
    }

    for (let like in this.state.likes) {
        if (like.user_id === this.props.author.id) {
          this.setState({
            postIsLiked: true
          })
        }
      }
  }
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      comments: [],
      likes: [],
      postIsLiked: false
    }
    this.showPostOptions = this.showPostOptions.bind(this);
    this.likeButtonClicked = this.likeButtonClicked.bind(this);
  }

  likeButtonClicked() {
    switch(this.state.postIsLiked) {
      case true:
        for (let like in this.state.likes) {
          if (like.user_id === this.props.author.id) {
            this.props.deleteLike(like.id);
          }
        }
        this.setState({
          postIsLiked: false
        });
        break;
      case false:
        this.props.createLike({like:{
          likeable_type: 'post',
          user_id: this.props.author.id,
          likeable_id: this.props.post.id
        }});
        this.setState({
          postIsLiked: true
        });
        break;

    }
    
    // let currLikes = this.state.likes;
    // currLikes.push('like');
    // this.setState({
    //   likes: currLikes
    // })
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
    let commentsArr = [];
    if (this.state.comments !== undefined) {
      // debugger;
        this.state.comments.forEach(comment => {
          // debugger;
          commentsArr.push(<CommentItem key={comment.id} comment={comment}/>)
        })
    }
    return (
    
    <div className='post-container'>
        
      <div className='post-top' >
        {this.props.currentUser.id === this.props.author.id ? <div className='post-options-btn' onClick={this.showPostOptions}><img src='https://i.ibb.co/7brv7Jz/three-dots.png'></img></div> : null}
        
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
        <div className='likes-counter-container'>
          {this.state.postIsLiked ? <div className='likes-count'>You and {this.state.likes.length} others</div> : this.state.likes !== undefined ? <div className='likes-count'>{this.state.likes.length}</div> : <div>Be the first to like</div> }
          {/* {this.state.likes !== undefined ? <div className='likes-count'>{this.state.likes.length}</div> : <div>Be the first to like</div>} */}
        </div>
        <div className='like-bar'>
          <div className='like-btn' onClick={() => this.likeButtonClicked()}>Like</div>
        </div>
        {commentsArr.length > 0 ? commentsArr : null}
        {<CreateComment post_id={this.props.post.id} />}
    </div>)
  }
}

export default connect(mSTP, mDTP)(PostItem);




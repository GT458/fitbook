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
  likes: getLikesByPostId(ownProps.post.id, state.entities.likes),
  
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
      likes:  Object.values(this.props.likes),
      postIsLiked: false
    })

    if (!this.props.author) {

      this.props.getUser(this.props.post.author_id);
      
    } 
    this.props.likes.forEach(like => {
      if ( this.props.author) {
        if (like.user_id === this.props.author.id) {
            if (this.state.postIsLiked === false) {

              this.setState({
                postIsLiked: true
              });
            }
            
          }
      }
          
      })
  }
  
  componentDidUpdate(prevProps) {
    // debugger;
    if (prevProps.comments.length !== this.props.comments.length) {
      // debugger;
      this.setState({
        comments: this.props.comments
      });
    }

    if (prevProps.likes.length !== this.props.likes.length) {
      this.setState({
        likes: Object.values(this.props.likes)
      });

      this.props.likes.forEach(like => {
      
        if (like.user_id === this.props.author.id) {
            if (this.state.postIsLiked === false) {

              this.setState({
                postIsLiked: true
              });
            }
            
          }
      
          
      })
      
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
        this.state.likes.forEach(like => {
          if (like.user_id === this.props.author.id) {
            this.props.deleteLike(like.id);
          }
        })
        //debugger;
        this.setState({
          postIsLiked: false
        });
        //debugger;
        break;
      case false:
        // let filteredLikes = [];
        // filteredLikes = this.state.likes.filter(like => like.likeable_id !== this.props.post.id)
        this.props.createLike({like:{
          likeable_type: 'post',
          user_id: this.props.author.id,
          likeable_id: this.props.post.id
        }});
        this.setState({
        //  likes: filteredLikes,
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
          <div className='delete-post-btn optn' onClick={() => {this.props.deletePost(this.props.post.id); this.setState({ showOptions: false });}}>Delete Post</div>
          <div className='post-options-border'></div>
          <div className='edit-post-btn optn' onClick={() => {this.props.openEditModal(this.props.modal, this.props.post.id); this.setState({ showOptions: false });}}>Edit Post</div>
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
          <img src='https://i.ibb.co/Y0fZMds/icons8-like-25.png'></img>
          {this.state.postIsLiked ? this.state.likes.length < 2 ? <div className='likes-count'>You like this </div>: <div className='likes-count'>You and {this.state.likes.length} others</div> : this.state.likes !== undefined || this.state.likes > 0 ? <div className='likes-count'>{this.state.likes.length}</div> : <div>Be the first to like</div> }
          {/* {this.state.likes !== undefined ? <div className='likes-count'>{this.state.likes.length}</div> : <div>Be the first to like</div>} */}
        </div>
        <div className='like-bar'>
          <div className={this.state.postIsLiked ? 'like-btn liked' : 'like-btn'} onClick={() => this.likeButtonClicked()}><img src='https://i.ibb.co/fXvtTQQ/like.png'></img>Like</div>
        </div>
        {commentsArr.length > 0 ? commentsArr : null}
        {<CreateComment post_id={this.props.post.id} />}
    </div>)
  }
}

export default connect(mSTP, mDTP)(PostItem);




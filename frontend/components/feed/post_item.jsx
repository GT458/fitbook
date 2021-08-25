import { connect } from "react-redux";
import React from 'react';
import { editPostModal, openModal } from "../../actions/modal_actions";
import { getUser } from "../../actions/user_actions";
import { formatFullName } from "../../util/format_name";
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/post_actions';
import modal from "../session/modal";
const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.post.author_id],
  modal: state.ui.modal
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
    return (
    
    <div className='post-container'>
        
      <div className='post-top' >
        {this.props.currentUser.id === this.props.author.id ? <div className='post-options-btn' onClick={this.showPostOptions}><img src='https://pics.freeicons.io/uploads/icons/png/5992412641579237606-512.png'></img></div> : null}
        
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
    </div>)
  }
}

export default connect(mSTP, mDTP)(PostItem);




import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editPost,fetchPost } from '../../actions/post_actions';
// import { RECEIVE_MODAL_ERROR } from '../../../actions/session_actions';

import { formatFirstName, formatFullName } from '../../util/format_name';
const mSTP = (state) => ({
  errors: state.errors.modal,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id],
  postId: state.ui.modal.post_id,
  post: state.entities.posts[state.ui.modal.post_id]
  // post: state.entities.posts[ownProps.id]
});

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal()),
  editPost: (post) => dispatch(editPost(post)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
});

class EditPostModal extends React.Component {

  componentDidUpdate(){
    // debugger;
    if (this.props.post) {
      this.setState({
        author_id: this.props.post.author_id,
        body: this.props.post.body,
        imageUrl: this.props.post.photo,
        imageFile: null
      })
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      author_id: 0,
      body: '',
      imageUrl: '',//this.props.post.photo,
      imageFile: null
      // post: this.props.post
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
  }
  handleInput(type) {
    return e => this.setState({[type]: e.currentTarget.value})
  }
  handleFileInput(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: '', imageFile: null });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[author_id]', this.props.currentUser.id);
    if (this.state.imageFile) {
      formData.append('post[photo]', this.state.imageFile);
    }
    this.props.closeModal();
    this.setState({
      author_id: 0,
      body: '',
      imageUrl: '',
      imageFile: null
    })
    this.props.editPost(formData);
  }
  render() {
    if (!this.props.modal.show_edit_post) {
      return null;
    }

    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form post-modal'>
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
            <div className='modal-header'>
              
              <h2>Create Post</h2>
            </div>
            <div className='post-header'>
              <div className='thumbnail'>
                <img src={this.props.currentUser.profile_photo}></img>
              </div>
              <div className='post-user-name'>
                {formatFullName(this.props.currentUser.fname, this.props.currentUser.lname)}
              </div>
            </div>
            <div className='form-container'>
              <form>
                <textarea value={this.state.body} onChange={this.handleInput('body')}placeholder={`What's on your mind, ${formatFirstName(this.props.currentUser.fname)}?`} required></textarea>
                <label className='file-upload'>Upload Photo<input type='file' onChange={this.handleFileInput}></input></label>
                <div>
                {this.state.imageUrl ? <img src={this.state.imageUrl} alt='post photo' ></img> : null}

                </div>
                <button type='submit' onClick={this.handleSubmit}>Post</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(EditPostModal);
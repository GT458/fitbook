import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
// import { RECEIVE_MODAL_ERROR } from '../../../actions/session_actions';

import { formatFirstName, formatFullName } from '../../util/format_name';
const mSTP = state => ({
  errors: state.errors.modal,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.post
});

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal()),
  createPost: (post) => dispatch(createPost(post))
});

class PostModal extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.errors.length !== this.props.errors.length) {
      this.setState({
        errors: this.props.errors
      })
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      author_id: 0,
      body: '',
      imageUrl: '',
      imageFile: null,
      errors: []
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
    
    if (this.state.body.length < 1) {
      this.setState({
        errors: ['Post cannot have an empty body']
      })
      return null;
    }
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
    this.props.createPost(formData);
  }
  render() {
    if (!this.props.modal.show_post) {
      return null;
    }
    let errors = null;
    if (this.state.errors.length >= 1) {
      errors = (
        <div className='post-errors-container'>
          {this.state.errors}
        </div>
      )
    }
    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form post-modal'>
            <span className='close-button'><button onClick={() => {
              this.setState({errors: []}); 
            this.props.closeModal();}}>&#x2715;</button></span>
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
            {this.state.errors.length >= 1 ? <div className='post-modal-errors'>{this.state.errors}</div> : null}
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

export default connect(mSTP, mDTP)(PostModal);
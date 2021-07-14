import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
// import { RECEIVE_MODAL_ERROR } from '../../../actions/session_actions';

import { formatFirstName, formatFullName } from '../../util/format_name';
const mSTP = state => ({
  errors: state.errors.modal,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal()),
  createPost: (post) => dispatch(createPost(post))
});

class PostModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      author_id: 0,
      body: '',

    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(type) {
    return e => this.setState({[type]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props.createPost({
      author_id: this.props.currentUser.id,
      body: this.state.body
    });

    this.props.closeModal();
    this.setState({
      author_id: 0,
      body: '',
    })
  }
  render() {
    if (!this.props.modal.show_post) {
      return null;
    }

    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form profile-picture-modal'>
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
                <input type='textarea' value={this.state.body} onChange={this.handleInput('body')}placeholder={`What's on your mind, ${formatFirstName(this.props.currentUser.fname)}?`} required></input>
                
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
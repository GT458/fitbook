import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { RECEIVE_MODAL_ERROR } from '../../../actions/session_actions';
import { updateUser } from '../../../actions/user_actions';
import { formatFullName } from '../../util/format_name';
const mSTP = state => ({
  errors: state.errors.modal,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal())
});

class PostModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      imageFile: null,
      show_post: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    
  }

  handleSubmit(e) {
    e.preventDefault();
    

    this.props.closeModal();
    this.setState({
      imageUrl: '',
      imageFile: null
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
            <div classNAme='post-header'>
              <div className='thumbnail'>

              </div>
              <div className='post-user-name'>
                {formatFullName(this.props.currentUser.fname, this.props.currentUser.lname)}
              </div>
            </div>
            <div className='form-container'>
              <form>

                <input type='file'></input>
                
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
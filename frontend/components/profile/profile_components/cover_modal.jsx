import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import {RECEIVE_MODAL_ERROR} from '../../../actions/session_actions';
import { updateUser, updateUserPhoto } from '../../../actions/user_actions';

const mSTP = state => ({
  errors: state.errors.modal,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal()),
  updateUserPhoto: (userId, formData) => dispatch(updateUserPhoto(userId, formData))
});

class CoverModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      imageFile: null,
      show_cover: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    //e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({imageUrl: reader.result, imageFile: file});
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: '', imageFile: null});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[email]', this.props.currentUser.email);
    if (this.state.imageFile) {
      formData.append('user[cover_photo]', this.state.imageFile);
    }

    // $.ajax({
    //   url: `api/users/${this.props.currentUser.id}`,
    //   method: 'PATCH',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // }).then(response => console.log(response), err => console.log(err.responseJSON))
    this.props.updateUserPhoto(this.props.currentUser.id, formData)
    this.props.closeModal();
    this.setState({
      imageUrl: '',
      imageFile: null
    })
  }
  render() {
    if (!this.props.modal.show_cover) {
      return null;
    }

    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form cover-photo-modal'>
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
            <div className='modal-header'>
              <h2>Edit Cover Picture</h2>
            </div>
            <div className='form-container'>
              <form>
                <input type='file' onChange={this.handleInput}></input>
                <div>
                  {this.state.imageUrl ? <img src={this.state.imageUrl} alt='cover photo' ></img> : null}
                  

                </div>
                <button type='submit' onClick={this.handleSubmit}>Upload Photo</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(CoverModal);
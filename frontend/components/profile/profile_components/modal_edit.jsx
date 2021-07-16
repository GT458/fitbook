import React from 'react';
import { updateUser } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { RECEIVE_MODAL_ERROR } from '../../../actions/session_actions';
const mSTP = (state, ownProps) => ({
  errors: state.errors.modal,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: (modal) => dispatch(closeModal(modal))
});


class ModalEdit extends React.Component {


  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      cover_photo_url: 'url',
      profile_photo_url: 'url',
      bio: '',
      city: '',
      work: '',
      school: '',
      show_edit: false,
      error: false,
      // email: '',
      // fname: '',
      // lname: '',
      // gender: '',
      // birthday: '',
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.clearState = this.clearState.bind(this);
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  componentDidMount() {
    let props = this.props;
    if (this.props.currentUser) {
      console.log(this.props.currentUser)
      this.setState({
        cover_photo_url: 'url',
        profile_photo_url: 'url',
        bio: props.currentUser.bio,
        city: props.currentUser.city,
        work: props.currentUser.work,
        school: props.currentUser.school,
        show_edit: false,
        error: false,
        // email: props.currentUser.email,
        // fname: props.currentUser.fname,
        // lname: props.currentUser.lname,
        // gender: props.currentUser.gender,
        // birthday: props.currentUser.birthday,
        id: props.currentUser.id
      })
    }
  }
  clearState() {
    // this.setState({
    //   id: null,
    //   cover_photo_url: 'url',
    //   profile_photo_url: 'url',
    //   bio: null,
    //   city: null,
    //   work: null,
    //   school: null,
    //   error: false
    // })

    this.props.closeModal({show_edit: false})

  }

  componentDidUpdate(prevProps, prevState) {

  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.updateUser(this.state).then(arg => {
      if (arg.type !== RECEIVE_MODAL_ERROR) {
        this.clearState()
      }
    })
  }

  render() {
    if (!this.props.modal.show_edit) {
      return null;
    }
    
    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form edit-modal'>
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
            <div className='modal-header'>
              <h2>Edit Profile</h2>
            </div>
            {this.props.errors.length ? <div className='modal-errors'>{this.props.errors.map((error, i) => <li key={i}>{error}</li>)}</div> : []}
            <div className={'form-container'}>
              <form onSubmit={this.handleSubmit}>
                <div className='bio'>
                  Bio:
                  <input className='text' type='textarea' value={this.state.bio} onChange={this.update('bio')} placeholder='Bio'></input>
                  {/* <h2>{this.props.currentUser.bio}</h2> */}
                </div>
                <div className='city'>
                  <label>City:</label>
                  <input className='text' type='text' value={this.state.city} onChange={this.update('city')} placeholder='City'></input>
                  {/* <h2>{this.props.currentUser.city}</h2> */}
                </div>
                <div className='work'>
                  <label>Work:</label>
                  <input className='text' type='text' value={this.state.work} onChange={this.update('work')} placeholder='Work'></input>
                  {/* <h2>{this.props.currentUser.work}</h2> */}
                </div>
                <div className='school'>
                  <label>School:</label>
                  <input className='text' type='text' value={this.state.school} onChange={this.update('school')} placeholder='School'></input>
                  {/* <h2>{this.props.currentUser.school}</h2> */}
                </div>
                <button type='submit' className='edit-button'>Edit Info</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(mSTP, mDTP)(ModalEdit);
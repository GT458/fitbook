import React from 'react';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal())
});


class Modal extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      gender: '',
      birthday: '1-1-1978',
      password: '',
      cover_photo_url: 'url',
      profile_photo_url: 'url',
      bio: null,
      city: null,
      work: null,
      school: null,
      show: false
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBday = this.updateBday.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  update(type) {
    return e => this.setState({[type]: e.currentTarget.value})
  }

  updateBday(type) {
    let bday = this.state.birthday.split('-');
    let idxToSwap = 0;
    switch(type) {
      case 'day':
        idxToSwap = 1;
      case 'year':
        idxToSwap = 2;
    }
    
    return e => {
      bday[idx] = e.target.value;
      this.setState({birthday:  bday.join('-')})
    }
  }

  clearState() {
    this.setState({
      email: '',
      fname: '',
      lname: '',
      gender: '',
      birthday: '1-1-1978',
      password: '',
      cover_photo_url: 'url',
      profile_photo_url: 'url',
      bio: null,
      city: null,
      work: null,
      school: null,
    })
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.signup(this.state);
    this.clearState();
    this.props.closeModal();
  }

  render() {
    if (!this.props.modal.show) {
      return null;
    }
    return (
      <div className='modal'>
        <div className='modal-content'>
          <span className='closeButton'><button onClick={() => this.props.closeModal()}>&#10006;</button></span>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type='text' value={this.state.fname} onChange={this.update('fname')} placeholder='First Name'></input>
            </label>
            <label>
              <input type='text' value={this.state.lname} onChange={this.update('lname')} placeholder='Last Name'></input>
            </label>
            <label>
              <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email'></input>
            </label>
            <label>
              <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password'></input>
            </label> <br />
            <label>Birthday {/* add more day, month ånd year*/} <br />
              <select name='day' onChange={this.updateBday('day')}>
                <option value='0' disabled>Day</option>
                <option value='1'>1</option>
              </select>
              <select name='day' onChange={this.updateBday('month')}>
                <option value='0' disabled>Month</option>
                <option value='1'>January</option>
              </select>
              <select name='day' onChange={this.updateBday('year')}>
                <option value='0' disabled>Year</option>
                <option value='1999'>1999</option>
              </select>
            </label> <br />
            <label>Gender</label> <br />
            <label>Male
              <input type='radio' name='gender' value='Male' onChange={this.update('gender')}></input>     
            </label>
            <label>Female
              <input type='radio' name='gender' value='Female' onChange={this.update('gender')}></input>
            </label>
            <label>Other
              <input type='radio' name='gender' value='Other' onChange={this.update('gender')}></input>
            </label> <br />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
      
    )
  }
}

export default connect(mSTP, mDTP)(Modal);
import React from 'react';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { RECEIVE_MODAL_ERROR } from '../../actions/session_actions';
const mSTP = (state, ownProps) => ({
  errors: state.errors.modal,
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
      show: false,
      error: false
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
      bday[idxToSwap] = e.target.value;
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
      error: false
    })
    
    this.props.closeModal({show: false})

  }

  componentDidUpdate(prevProps, prevState) {
    
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.signup(this.state).then(arg => {
      if (arg.type !== RECEIVE_MODAL_ERROR) {
        this.clearState()
      } 
    })
  }

  render() {
    if (!this.props.modal.show) {
      return null;
    }
    const days = () => {
      let numDays = [];
      for (let i = 1; i <= 31; i++) {
        numDays.push(<option value={i} key={`day-${i}`}>{i}</option>)
      }
      return numDays;
    }
    const years = () => {
      let numYears = [];
      for (let i = 1900; i <= 2021; i++) {
        numYears.unshift(<option value={i} key={`day-${i}`}>{i}</option>)
      }
      return numYears;
    }
    return (
      <div className='modal'>
        <div className='modal-child'>
          <div className='modal-form'>

          
            <span className='close-button'><button onClick={() => this.props.closeModal()}>&#x2715;</button></span>
          <div className='modal-header'>
            <h2>Sign Up</h2>
            <span>It's quick and easy.</span>
          </div>
          {this.props.errors.length ? <div className='modal-errors'>{this.props.errors.map((error, i) => <li key={i}>{error}</li>)}</div> : [] }
          <div className={'form-container'}>
          <form onSubmit={this.handleSubmit}>
            <div className='name'>

                <input className='text' type='text' value={this.state.fname} onChange={this.update('fname')} placeholder='First Name' required></input>
   

                  <input className='text' type='text' value={this.state.lname} onChange={this.update('lname')} placeholder='Last Name' required></input>

            </div>

                <input className='text' type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email' required></input>

                <input className='text' type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' required></input>
            <div className='birthday'>
                  <label>Birthday {/* add more day, month ånd year*/} </label> 
              
              <select name='month' onChange={this.updateBday('month')} required defaultValue='0'>
                <option value='0' disabled >Month</option>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
                  <select name='day' onChange={this.updateBday('day')} required defaultValue='0'>
                    <option value='0' disabled >Day</option>
                    {days()}
                  </select>
              <select name='year' onChange={this.updateBday('year')} required defaultValue='0'>
                <option value='0' disabled >Year</option>
                {years()}
              </select>
            
                </div>
                <div className='gender'>

                
            <label className='gen-label'>Gender</label> 
            <div className='gender-option'>
              <label>Male </label>
              <input type='radio' name='gender' value='Male' onChange={this.update('gender')} required></input>     
            </div>
              <div className='gender-option'>
              <label>Female</label>
              <input type='radio' name='gender' value='Female' onChange={this.update('gender')}></input>
            </div>
              <div className='gender-option'>
              <label>Other</label>
              <input type='radio' name='gender' value='Other' onChange={this.update('gender')}></input>
            </div>
            </div>
            <button type='submit' className='signup-button'>Sign Up</button>
          </form>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default connect(mSTP, mDTP)(Modal);
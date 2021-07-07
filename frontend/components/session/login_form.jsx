import React from 'react';
import { Link } from 'react-router-dom';
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {email: 'demo@demo.com', password: 'password'}
    this.props.processForm(user);
  }
  update(type) {
    return e => this.setState({[type]: e.currentTarget.value})
  }
  
  render() {
    const errs = this.props.errors.length ? this.props.errors.map((error, i) => (<li key={i}>{error}</li>)) : [];
    return (
      <div className='login-form'>
        <div className='left-side'>
          <h2>fitbook</h2>
          <h4>Connect with friends and the world around you on Fitbook.</h4>
        </div>
        <div className='right-side'>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email'></input>
            </label>
            <label>
              <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password'></input>
            </label>
            <div className='errors'>
              {errs}

            </div>
            <button type='submit' className='login-button btn'>Log In</button>
          </form>
          <div className='sep'></div>
          <div className='outer-btns'>
            <button onClick={e => this.props.openModal(this.props.modal)} className='outside-btn btn'>Create New Account</button>
            <button onClick={e => this.handleDemo(e)} className='outside-btn btn'>Demo Login</button>
          </div>
          
          
        </div>
       
      </div>
    );
  }
}

export default LoginForm;
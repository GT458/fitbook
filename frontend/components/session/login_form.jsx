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
          <h3>Connect with friends and the world around you on Fitbook.</h3>
        </div>
        <div className='right-side'>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Email:
              <input type='text' value={this.state.email} onChange={this.update('email')}></input>
            </label>
            <br />
            <label>Password:
              <input type='password' value={this.state.password} onChange={this.update('password')}></input>
            </label>
            <button type='submit'>Login</button>
            <button onClick={e => this.handleDemo(e)}>Demo Login</button>
          </form>

          <div className='errors'>
            {errs}

          </div>
          <p>Need an account?</p>
          <button onClick={e => this.props.openModal(this.props.modal)}>Sign Up</button>
        </div>
       
      </div>
    );
  }
}

export default LoginForm;
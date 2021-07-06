import React from 'react';
import { Link } from 'react-router-dom';
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(type) {
    return e => this.setState({[type]: e.currentTarget.value})
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    
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
          </form>

          <div className='errors'>
            {this.renderErrors()}

          </div>
          <p>Need an account?</p>
          <button onClick={e => this.props.openModal(this.props.modal)}>Sign Up</button>
        </div>
       
      </div>
    );
  }
}

export default LoginForm;
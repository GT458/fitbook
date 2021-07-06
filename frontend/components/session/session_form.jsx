import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    const oppositeForm = this.props.formType === 'login' ? ['/signup', 'Sign Up'] : ['/login', 'Login'];
    return (
    <div className='sessionForm'>
      <header className={this.props.formType}>
        
        <Link to={oppositeForm[0]}>{oppositeForm[1]}</Link>
        
      </header>
      {this.renderErrors()}
    </div>
    );
  }
}

export default SessionForm;
import React from 'react';
import { Link } from 'react-router-dom';
import FeedIndexContainer from './feed/feed_index_container';
class Splash extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    const welcome = () => (
      <div>
        <h1>Welcome to Fitbook, {this.props.currentUser.fname}</h1>
        <FeedIndexContainer />
        <button onClick={() => this.props.logout()}>Logout</button> 
      </div>
    )
    const signUpLogin = () => (
      <div>
        <h2>no user</h2>
        
      </div>
    )
    // console.log(this.props.currentUser)
    return (
      this.props.currentUser ? welcome() : signUpLogin()
    )
    
  }
}

export default Splash;
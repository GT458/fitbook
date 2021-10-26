import React from 'react';
import { Link } from 'react-router-dom';
import NotificationsFeed from '../feed/notifications_feed';
import SearchResults from './search_results';
class NavBar extends React.Component {

  componentDidUpdate() {
    
  }
  componentDidMount() {
    this.props.fetchUser();
  }
  constructor(props) {
    super(props)
    this.state = {
      showNotifs: false,
      hasNotifs: false
      
    }
    this.setNotification = this.setNotification.bind(this);
    this.setNotifsIndicator = this.setNotifsIndicator.bind(this);
  }

  setNotifsIndicator(boolVal) {
    this.setState({hasNotifs: boolVal})
  }
  setNotification() {
    
    this.setState({showNotifs: !this.state.showNotifs})
  }
  render() {
    
    return (
      <div className='nav-bar'>
        <div className='left'>
          <Link to='/'><img src={'https://img.icons8.com/fluent/96/000000/facebook-new.png'}></img></Link>
           <SearchResults />
           {/* <input type='text' placeholder='Search Fitbook'></input> */}
        </div>
        <div className='middle'>
          <div className='buttons-container'>
            {/* <a href='https://github.com/GT458/fitbook'><img src='https://pngimg.com/uploads/github/github_PNG40.png'></img></a> */}
            <a target="_blank" href='https://github.com/GT458/fitbook'><button className='nav-btn github'></button> </a>
            <a target="_blank" href='https://www.linkedin.com/in/isohrob/'><button className='nav-btn linkedin'></button> </a>
            
          </div>
        </div>
        <div className='right'>
          {this.state.showNotifs ? <NotificationsFeed incomingFriendRequests={this.props.incomingFriendRequests} setNotifsIndicator={this.setNotifsIndicator} setNotification={this.setNotification}/> : null}
          
          <div className='nav-buttons-container'>
                <Link to={`/users/${this.props.currentUser.id}`}>
            <div className='profile-btn'>
              <div className='thumbnail'>
                <img src={this.props.currentUser.profile_photo}></img>
              </div>
              <span>{this.props.currentUser.fname[0].toUpperCase() + this.props.currentUser.fname.slice(1)}</span>
              </div>
                </Link>
              {this.props.incomingFriendRequests.length >= 1 ? <div className='notif-indic'>  </div> : null}
            <button onClick={() => this.setState({showNotifs: !this.state.showNotifs})}className='nav-btn .notif-btn'><i class="far fa-bell"></i></button> 
            {/* <button className='nav-btn notif-btn'></button> */}
            <button className='nav-btn logout-btn' onClick={() => this.props.logout()}><i class="fas fa-caret-down"></i></button>

          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
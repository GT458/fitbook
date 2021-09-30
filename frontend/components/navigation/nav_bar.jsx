import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='nav-bar'>
        <div className='left'>
          <Link to='/'><img src={'https://img.icons8.com/fluent/96/000000/facebook-new.png'}></img></Link>
           <input type='text' placeholder='Search Fitbook'></input>
        </div>
        <div className='middle'>
          <div className='buttons-container'>
            {/* <a href='https://github.com/GT458/fitbook'><img src='https://pngimg.com/uploads/github/github_PNG40.png'></img></a> */}
            <a href='https://github.com/GT458/fitbook'><button className='nav-btn github'></button> </a>
            <a href='https://github.com/GT458/fitbook'><button className='nav-btn linkedin'></button> </a>
            
          </div>
        </div>
        <div className='right'>
          <div className='nav-buttons-container'>
                <Link to={`/users/${this.props.currentUser.id}`}>
            <div className='profile-btn'>
              <div className='thumbnail'>
                <img src={this.props.currentUser.profile_photo}></img>
              </div>
              <span>{this.props.currentUser.fname[0].toUpperCase() + this.props.currentUser.fname.slice(1)}</span>
              </div>
                </Link>
            <button className='nav-btn .notif-btn'>N</button> 
            {/* <button className='nav-btn notif-btn'></button> */}
            <button className='nav-btn logout-btn' onClick={() => this.props.logout()}></button>

          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
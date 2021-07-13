import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='nav-bar'>
        <div className='left'>
          <Link to='/'><img src={'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'}></img></Link>
          
          <input type='text' placeholder='Search Fitbook'></input>
        </div>
        <div className='middle'>
          <div className='buttons-container'>
            <a href='https://github.com/GT458/fitbook'><img src='https://pngimg.com/uploads/github/github_PNG40.png'></img></a>
          </div>
        </div>
        <div className='right'>
          <div className='nav-buttons-container'>
            <button className='nav-btn profile-btn'>P</button>
            <button className='nav-btn menu'>M</button>
            <button className='nav-btn notif-btn'>N</button>
            <button className='nav-btn dropdown-btn'>D</button>

          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
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
          <span>place holder, something may go here?</span>
        </div>
        <div className='right'>
          <button className='nav-btn profile-btn'></button>
          <button className='nav-btn menu'></button>
          <button className='nav-btn notif-btn'></button>
          <button className='nav-btn dropdown-btn'></button>
        </div>
      </div>
    )
  }
}

export default NavBar;
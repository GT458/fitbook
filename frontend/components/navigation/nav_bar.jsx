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
            <div className='profile-btn'>
              <div className='thumbnail'>
                <img src={'https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/78117715_3302453119826931_6725932744179712000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=67GSNo2B_IEAX_LuFnV&_nc_oc=AQkj2xKG2b0cJ4RkfERvJ-kt_JMAJrqP790jFTO8r0mNY681bo9g3arXIBY9jxFY2a4&_nc_ht=scontent-iad3-1.xx&oh=38393f8d80a6cc51ed2cd22cf1a65e9c&oe=60F03844'}></img>
              </div>
              <span>{this.props.currentUser.fname[0].toUpperCase() + this.props.currentUser.fname.slice(1)}</span>
              </div>
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
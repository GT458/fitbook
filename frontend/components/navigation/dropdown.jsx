import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatFullName } from "../../util/format_name";
const mSTP = state => ({

})

const mDTP = dispatch => ({

})

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (!this.props.menuOpen) {
      return null;
    }

    return (
       <div className='drop-down-full' onClick={() => this.props.setMenuOpen(false)}>
      <div className="drop-down-container" >
        <div className="drop-down-contents">
          <div className="view-profile-bar bar">
            <Link to={`users/${this.props.currentUser.id}`}>
                <img src={this.props.currentUser.profile_photo}></img>
                <div>
                  <h1>{formatFullName(this.props.currentUser.fname, this.props.currentUser.lname)}</h1>
                  <span>See your profile</span>
              </div>
            </Link>
          </div>
          <div className="border"></div>
          <div className="display-bar bar">
            <div className="display-icon">
              <i className="fas fa-moon"></i>
            </div>
            <h1>Display Settings</h1>
          </div>
          <div className="logout-bar bar" onClick={() => this.props.logout()}>
            <div className="display-icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <h1>Log Out</h1>
          </div>
        </div>
      </div>
      </div>
    )
    
  }
}


export default connect(mSTP, mDTP)(DropDownMenu);

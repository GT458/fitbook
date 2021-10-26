import React from "react";
import { connect } from "react-redux";

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
      <div className="drop-down-container">
        <div className="drop-down-contents">
          <div className="view-profile-bar">
            <img><i class="fab fa-mandalorian"></i></img>
            <h1>Name</h1>
            <span>See your profile</span>
          </div>
          <div className="display-bar">
            <div className="display-icon">
              <i class="fas fa-moon"></i>
            </div>
            <h1>Display Settings</h1>
          </div>
          <div className="logout-bar">
            <div className="logout-icon">
              <i class="fas fa-sign-out-alt"></i>
            </div>
            <h1>Log Out</h1>
          </div>
        </div>
      </div>
    )
    
  }
}


export default connect(mSTP, mDTP)(DropDownMenu);

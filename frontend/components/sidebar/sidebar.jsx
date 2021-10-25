import React from "react";
import { connect } from "react-redux";
import { formatFullName } from "../../util/format_name";


const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({

})

class Sidebar extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser === undefined) {
      return null;
    }
    const currentUser = this.props.currentUser;
    return (
      <div className="sidebar-container">
        <div className="sidebar-items">
          <div className="user-bar s-item">
            <img src={currentUser.profile_photo}></img>
            <h1>{formatFullName(currentUser.fname, currentUser.lname)}</h1>
          </div>
          <div className="friends-bar s-item">
            <h1>Friends</h1>
          </div>
          <div className="photos-bar s-item">
            <h1>Photos</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mSTP, mDTP)(Sidebar);
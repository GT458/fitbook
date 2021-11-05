import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            <Link to={`/users/${this.props.currentUser.id}`}>

            <img src={currentUser.profile_photo}></img>
            <h1>{formatFullName(currentUser.fname, currentUser.lname)}</h1>
            </Link>
          </div>
          <div className="friends-bar s-item">
            <Link to={`/users/${this.props.currentUser.id}/friends`}>
            <span><i className="fas fa-user-friends"></i></span>
            <h1>Friends</h1>
            </Link>
          </div>
          <div className="photos-bar s-item">
            <span><i className="fas fa-images"></i></span>
            <h1>Photos</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mSTP, mDTP)(Sidebar);
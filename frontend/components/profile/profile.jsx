import React from 'react'
import ProfileHeader from './profile_components/profile_header';
import ProfileNavBar from './profile_components/profile_nav_bar';
import PostTab from './profile_components/nav_tabs/post_tab';
class Profile extends React.Component {
  componentDidMount() {
    // debugger
    this.props.getUser(this.props.match.params.userId);
  }

  componentDidUpdate( prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getUser(this.props.match.params.userId)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      pageType: 'posts'
    }
  }

  render() {
    // debugger
    if (!this.props.user) {
      return <h1>no user</h1>;
    }
    return (
    <div className='profile-page'>
      <div className='top'>
        <div className='cover-photo-header'>
          <img className='cover-photo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YhIjVgUwoHocrnTWc89jg5SsnkNMDJLbeg&usqp=CAU'></img>
        </div>
      </div>
      <ProfileHeader user={this.props.user} currentUser={this.props.currentUser} />
      <ProfileNavBar />
      <div className='profile-page-info'>
        {/* For now temp stuff, but based off nav bar on page content rendered here will be based off such*/}
        {/* render Posts or About or Friends or Photos */}
        <PostTab user={this.props.user} currentUser={this.props.currentUser}/>
        

      </div>
      {/* <h1>{this.props.user.fname}'s Profile</h1> */}
    </div>
      
    )
  }
}

export default Profile;
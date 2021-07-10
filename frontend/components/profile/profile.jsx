import React from 'react'
import ProfileHeader from './profile_components/profile_header';
import ProfileNavBar from './profile_components/profile_nav_bar';
import PostTab from './profile_components/nav_tabs/post_tab';
import AboutTab from './profile_components/nav_tabs/about_tab';
import PhotosTab from './profile_components/nav_tabs/photos_tab';
import FriendsTab from './profile_components/nav_tabs/friends_tab';

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

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(arg) {
    // e.preventDefault();
    console.log(arg)
    switch(arg) {
      case 'posts':
        // console.log(this.state)
        this.setState({pageType: 'posts'})
        break;
      case 'about':
        // console.log(this.state)
        this.setState({pageType:'about'})
        break;
      case 'friends':
        // console.log(this.state)
        this.setState({pageType: 'friends'})
        break;
      case 'photos':
        this.setState({pageType: 'photos'})
        break;
        // console.log(this.state)
      default:
        console.log('blegh;')
        this.setState({pageType: 'posts'})
    }
  }
  render() {
    // debugger
    let postToRender = () => {
      switch(this.state.pageType) {
        case 'posts':
          return <PostTab user={this.props.user} currentUser={this.props.currentUser} />
        case 'about':
          return <AboutTab />
        case 'friends':
          return <FriendsTab />
        case 'photos':
          return <PhotosTab />
        default:
          return <PostTab user={this.props.user} currentUser={this.props.currentUser} />
      }
    }
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
      <ProfileNavBar handleButtonClick={this.handleButtonClick}/>
      <div className='profile-page-info'>
        {/* For now temp stuff, but based off nav bar on page content rendered here will be based off such*/}
        {/* render Posts or About or Friends or Photos */}
        {/* <PostTab user={this.props.user} currentUser={this.props.currentUser}/> */}
        
        { postToRender() }
      </div>
      {/* <h1>{this.props.user.fname}'s Profile</h1> */}
    </div>
      
    )
  }
}

export default Profile;
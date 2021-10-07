import React from 'react'
import ProfileHeader from './profile_components/profile_header';
import ProfileNavBar from './profile_components/profile_nav_bar';
import PostTab from './profile_components/nav_tabs/post_tab';
import AboutTab from './profile_components/nav_tabs/about_tab';
import PhotosTab from './profile_components/nav_tabs/photos_tab';
import FriendsTab from './profile_components/nav_tabs/friends_tab';
import { deleteFriendRequest } from '../../util/friend_request_api_util';


class Profile extends React.Component {
  componentDidMount() {
    // debugger
    this.props.getUser(this.props.match.params.userId);
    this.props.fetchAllFriendRequests();
    

    // if (this.props.profileUserFriends.length >= 1) {
    //   this.props.profileUserFriends.forEach(friend => {
    //     this.props.getUser(friend.id);
    //   })
    // }
  }

  componentDidUpdate( prevProps) {
    
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getUser(this.props.match.params.userId)
      
    }

    if (this.props.profileUserFriends.length !== prevProps.profileUserFriends.length) {
      let tempFriends = [];
      tempFriends = this.props.profileUserFriends;
      // this.props.profileFriendUsers.forEach(friend => {
      //   //this.props.getUser(friend.user_id1);
      //   debugger;
      //   tempFriends.push(this.props.users[friend.user_id1])
      // })
      this.setState({friends: tempFriends})
    }
    
  }

  constructor(props) {
    super(props);
    this.state = {
      pageType: 'posts',
      friends: []
    }
    this.deleteFr = this.deleteFr.bind(this);
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

  deleteFr(id) {
    this.props.deleteFriendRequest(id);
  }

  render() {
    // debugger
    
    // let friends = [];
    // if (this.state.profileUserFriends !== undefined) {
    //   this.state.profileUserFriends.forEach(friend => {
    //     //debugger;
    //     if (friend.user_id1 !== this.props.currentUser.id) {

    //       friends.push(this.props.users[friend.user_id1])
    //     } else {
    //       friends.push(this.props.users[friend.user_id2])
    //     }
    //   })
    // }
    
    
    let postToRender = () => {
      
      
      switch(this.state.pageType) {
        case 'posts':
          return <PostTab user={this.props.user} currentUser={this.props.currentUser} />
        case 'about':
          return <AboutTab  user={this.props.user} currentUser={this.props.currentUser}/>
        case 'friends':
          //debugger;
          
          return <FriendsTab handleButtonClick={this.handleButtonClick} user={this.props.user} friends={this.props.profileUserFriends} currentUser={this.props.currentUser}/>
        case 'photos':
          return <PhotosTab user={this.props.user} currentUser={this.props.currentUser}/>
        default:
          return <PostTab user={this.props.user} currentUser={this.props.currentUser} />
      }
    }

    // let friendButton = () => {
    //   let frs = this.props.currentUserFriendRequests;
    //   if ( frs.length > 0) {
    //     for ( let i = 0; i < frs.length; i++) {
    //       if (frs[i].requestee_id === this.props.user.id) {
    //         //return <button className=''
    //       }
    //     } 
    //   }
    // }
    
    if (!this.props.user) {
      return <h1>no user</h1>;
    }
   
    return (
    <div className='profile-page'>
      <div className='top'>
        <div className='header-content-container'>

          <div className='cover-photo-header'>
              {this.props.currentUser.id === this.props.user.id ? <button className='edit-cover-button' onClick={e => this.props.openCoverPhotoModal(this.props.modal)}><img src="https://img.icons8.com/material-rounded/96/000000/camera--v1.png" />Edit Cover Photo</button> : null }
              <img className='cover-photo' src={this.props.user.cover_photo}></img>
          </div>
            <ProfileHeader createFriend={this.props.createFriend} profileUserFriendRequests={this.props.profileUserFriendRequests} deleteFriend={this.props.deleteFriend} profileUserFriends={this.props.profileUserFriends} currentUserFriends={this.props.currentUserFriends} deleteFriendRequest={this.deleteFr} currentUserFriendRequests={this.props.currentUserFriendRequests} modal={this.props.modal} openEditModal={this.props.openEditModal} openProfilePictureModal={this.props.openProfilePictureModal} user={this.props.user} currentUser={this.props.currentUser} createFriendRequest={this.props.createFriendRequest}/>
        </div>

       
      </div>
      <ProfileNavBar handleButtonClick={this.handleButtonClick} pageType={this.state.pageType}/>
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
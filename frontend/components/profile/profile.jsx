

import React from 'react'

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
  }

  render() {
    // debugger
    if (!this.props.currentUser) {
      return <h1>no user</h1>;
    }
    return (
    <div className='profile-page'>
      <div className='top'>
        <div className='cover-photo-header'>
            <img className='cover-photo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YhIjVgUwoHocrnTWc89jg5SsnkNMDJLbeg&usqp=CAU'></img>
        </div>

      </div>
      <div className='name-photo-container'>
        <h1>name photo stuff</h1>
      </div>
      <div className='profile-nav-bar'>
        <h1>profile nav bar</h1>
      </div>
      <div className='profile-page-info'>
        {/* For now temp stuff, but based off nav bar on page content rendered here will be based off such*/}
        <div className='left-profile'>
          <div className='intro'>
            <h1> intro yuh </h1>
          </div>
        </div>
        <div className='right-profile'>
          <div className='posts'>
            <h1>posts yuh</h1>
          </div>
        </div>

      </div>
      <h1>{this.props.currentUser.fname}'s Profile</h1>
    </div>
      
    )
  }
}

export default Profile;
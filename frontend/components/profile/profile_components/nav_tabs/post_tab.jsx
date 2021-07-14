import React from 'react';

class PostTab extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let user = this.props.user;
    return(
      <div className='post-tab'>
        <div className='left-profile'>
          <div className='intro'>
            <h2>Intro</h2>
            
            <div className='bio'>
              <span>{this.props.user.bio}</span>
            </div>
            <div className='work'>
              <span className='bold'>Work: </span><span>{this.props.user.work}</span>
            </div>
            <div className='city'>
              <span className='bold'>Lives in: </span><span>{this.props.user.city}</span>
            </div>
            <div className='school'>
              <span className='bold'>Studied at: </span> <span>{this.props.user.school}</span>
            </div>
          </div>
          <div className='left-photos'>
            <h2> Photos </h2>
            <span>Nothing to show--yet</span>
          </div>
        </div>
        <div className='right-profile'>
          <div className='create-post'>
            <div className='create-post-top-half'>
              <div className='thumbnail-img'>

                <img src={this.props.currentUser.profile_photo}></img>
              </div>
              <input type='text' placeholder={`What's on your mind?`}></input>
            </div>
            <div className='create-post-button'>
              <button>Add Photo</button>
            </div>
          </div>
          <div className='posts'>
            <div className='post-1'>
              <span>this is post 1</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default PostTab;
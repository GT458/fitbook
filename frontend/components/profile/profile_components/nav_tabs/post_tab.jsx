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

                <img src={'https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/78117715_3302453119826931_6725932744179712000_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=67GSNo2B_IEAX_LuFnV&_nc_oc=AQkj2xKG2b0cJ4RkfERvJ-kt_JMAJrqP790jFTO8r0mNY681bo9g3arXIBY9jxFY2a4&_nc_ht=scontent-iad3-1.xx&oh=38393f8d80a6cc51ed2cd22cf1a65e9c&oe=60F03844'}></img>
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
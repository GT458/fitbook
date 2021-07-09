import React from 'react';

class PostTab extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='post-tab'>
        <div className='left-profile'>
          <div className='intro'>
            <div className='joined-date'>
              Joined on August 1st, 2020
            </div>
            <div className='bio'>
              <p>This is a test bio</p>
            </div>
            <div className='work'>
              <p>Works at Facebook</p>
            </div>
          </div>
        </div>
        <div className='right-profile'>
          <div className='create-post'>
            <span>Write a post</span>
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
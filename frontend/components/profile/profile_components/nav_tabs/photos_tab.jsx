import React from 'react';
import { connect } from 'react-redux';
const mSTP = state =>  ({
  posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({

})

class PhotosTab extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
   
    const postsWithPhotos = this.props.posts.filter(post => {
      if (post.photo !== undefined) {
        return post;
      }
    })
    console.log(postsWithPhotos);
    return (
      <div className='about-tab'>
        <div className='content-display'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s Photos</h2>
          <div className='photos-content'>
            0 photos :(
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(PhotosTab);
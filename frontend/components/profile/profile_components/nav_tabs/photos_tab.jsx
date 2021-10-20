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
   
    const postsWithPhotos = [];
    this.props.posts.forEach(post => {
      if (post.photo !== undefined && post.author_id === this.props.user.id) {
        postsWithPhotos.push( <img key={post.id} className='profile-photo-thumb'src={post.photo}></img>);
      }
    })
    console.log(postsWithPhotos);
    return (
      <div className='about-tab'>
        <div className='content-display'>
          <h2>{this.props.user.fname[0].toUpperCase() + this.props.user.fname.slice(1)}'s Photos</h2>
          <div className='photos-content'>
            {postsWithPhotos.length >= 1  ? postsWithPhotos : 'No photos'}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(PhotosTab);
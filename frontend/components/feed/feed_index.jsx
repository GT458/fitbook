import PostItem from './post_item';
import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    // console.log('hit it')
    this.props.fetchAllPosts();
    this.setState({
      posts: Object.values(this.props.posts)
    })
    // debugger;
    // let posts = this.props.posts;
    // debugger;
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.posts).length !== Object.values(this.props.posts).length ) {
      this.setState({
        posts: Object.values(this.props.posts)
      })
    }
  }
  render() {
    // let posts = this.props.posts;
    
    // debugger
    if (this.state.posts.length < 1) {
      return null;
    }
    let posts = this.state.posts.map((post, idx) => {

      return <PostItem key={idx} post={post} user={this.props.currentUser} />
    });
    // debugger;
    return (
      <div className='posts-feed'>
        <h2>All Posts</h2>
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
        {posts}
      </div>
    )
  }
}

export default Feed;
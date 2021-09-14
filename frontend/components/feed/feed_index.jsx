import PostItem from './post_item';
import React from 'react';
import CreatePostComponent from './create_post_component';
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
    this.props.fetchAllLikes();
    this.setState({
      posts: Object.values(this.props.posts)
    })
    // debugger;
    // let posts = this.props.posts;
    // debugger;
  }

  componentDidUpdate(prevProps, prevState) {
    if (Object.values(prevProps.posts).length !== Object.values(this.props.posts).length ) {
      this.setState({
        posts: Object.values(this.props.posts)
      })
      this.props.fetchAllLikes();
    }
    
  }
  render() {
    // let posts = this.props.posts;
    
    // debugger
    if (this.state.posts.length < 1) {
      return (
      <div className='posts-feed'>

        <CreatePostComponent />
      </div>
      )
    }
    let posts = this.state.posts.map((post, idx) => {

      return <PostItem key={idx} post={post} user={this.props.currentUser} />
    });
    // debugger;
    return (
      <div className='posts-feed'>
        {/* <h2>All Posts</h2> */}
        {<CreatePostComponent />}
        {posts.reverse()}
      </div>
    )
  }
}

export default Feed;
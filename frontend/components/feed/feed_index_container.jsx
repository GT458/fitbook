import { connect } from "react-redux";
import { fetchPost, fetchAllPosts } from "../../actions/post_actions";
import { openModal } from "../../actions/modal_actions";
import Feed from './feed_index'
import { fetchAllLikes } from "../../actions/like_actions";
export const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  posts: state.entities.posts
})

export const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchAllLikes: () => dispatch(fetchAllLikes())
})

export default connect(mSTP, mDTP)(Feed)
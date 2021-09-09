import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, DELETE_COMMENT_STATE } from "../actions/comment_actions";
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      action.posts.forEach(postObj => {
        let post = Object.values(postObj)[0];
        if (post.comments) {
          // debugger;
          Object.values(post.comments).forEach(comment => {
            newState[comment.id] = comment;
          })
        }
      })
      // debugger;
    return newState;
    case RECEIVE_COMMENT:
      return Object.assign({}, state, {[action.comment.id]: action.comment})
    case RECEIVE_ALL_COMMENTS: 
      action.comments.forEach(ele => {
        let commentToAdd = Object.values(ele)[0];
        newState[commentToAdd.id] = commentToAdd;
      })
      return newState;
    case DELETE_COMMENT_STATE:
      delete newState[action.comment.id];
      return newState;
    default:
      return newState;
  }
}

export default commentsReducer;
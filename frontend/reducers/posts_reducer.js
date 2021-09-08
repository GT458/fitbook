import { RECEIVE_POST, RECEIVE_ALL_POSTS, DELETE_POST, UPDATED_POST } from "../actions/post_actions";

import { RECEIVE_COMMENT } from "../actions/comment_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    
    case RECEIVE_COMMENT:
      
      let postOfComment = newState[action.comment.post_id];
      postOfComment.comments[action.comment.id] = action.comment;
      return Object.assign({}, newState, {[action['comment']['post_id']] : postOfComment });
    case RECEIVE_POST:
      // debugger 
      return Object.assign({}, state, { [action.post.id]: action.post })
    case RECEIVE_ALL_POSTS:
      // action.posts.forEach(post => {
      //   if (post.comments) {
      //     newState
      //   }
      // })
      // debugger;
      action.posts.forEach(ele => { 
        let postToAdd = Object.values(ele)[0] 
        newState[postToAdd.id] = postToAdd;
        // if (postToAdd.comments) {
        //   newState[postToAdd][comments] = postToAdd.comments
        // }
      })
      // debugger;
      return newState;
    case DELETE_POST:
      delete newState[action.post.id];
      return newState;
    case UPDATED_POST:
      delete newState[action.post.id];
      newState[action.post.id] = action.post;
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
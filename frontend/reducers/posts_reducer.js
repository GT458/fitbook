import { RECEIVE_POST, RECEIVE_ALL_POSTS } from "../actions/post_actions";



const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_POST:
      // debugger
      return Object.assign({}, state, { [action.post.id]: action.post })
    case RECEIVE_ALL_POSTS:
      action.posts.forEach(ele => { 
        let postToAdd = Object.values(ele)[0] 
        newState[postToAdd.id] = postToAdd;
      })
      // debugger;
      return newState;
      
    default:
      return state;
  }
}

export default postsReducer;
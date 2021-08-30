import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, DELETE_COMMENT_STATE } from "../actions/comment_actions";


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
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
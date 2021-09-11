import { RECEIVE_LIKE, RECEIVE_ALL_LIKES, DELETE_LIKE } from "../actions/like_actions";


const likesReducer = (state = {}, action ) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LIKE:
      return Object.assign({}, state, {[action.like.id]: action.like})
    case RECEIVE_ALL_LIKES:
      let newState = Object.assign({}, state);
      Object.values(action.likes).forEach(like => {
        newState[like.id] = like;
      })
      return newState;
    case DELETE_LIKE:
      let newState = Object.assign({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
}
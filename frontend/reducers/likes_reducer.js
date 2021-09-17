import { RECEIVE_LIKE, RECEIVE_ALL_LIKES, DELETE_LIKE } from "../actions/like_actions";


const likesReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch(action.type) {
    
    case RECEIVE_LIKE:
      return Object.assign({}, state, {[action.like.id]: action.like})
    case RECEIVE_ALL_LIKES:
      
     Object.values(action.likes).forEach(like => {
        
        newState[like.id] = like;
      })
      return newState;
    case DELETE_LIKE:
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
}

export default likesReducer;
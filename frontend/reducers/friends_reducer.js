import { RECEIVE_FRIEND, RECEIVE_ALL_FRIENDS, DELETE_FRIEND } from "../actions/friend_actions";


const friendsReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_FRIEND:
      return Object.assign({}, state, {[action.friend.id]: action.friend})
    case RECEIVE_ALL_FRIENDS:
      Object.values(action.friends).forEach(friend => {
        newState[friend.id] = friend
      });
      return newState;
    case DELETE_FRIEND:
      delete newState[action.friend.id];
      return newState;
    default:
      return state;
  }
}

export default friendsReducer;
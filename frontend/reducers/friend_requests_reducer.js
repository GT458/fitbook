import { RECEIVE_FRIEND_REQUEST, RECEIVE_ALL_FRIEND_REQUESTS, DELETE_FRIEND_REQUEST } from "../actions/friend_request_actions";



const friendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_FRIEND_REQUEST:
      return Object.assign({}, state, {[action.friend_request.id]: action.friend_request});
    case RECEIVE_ALL_FRIEND_REQUESTS:
      Object.values(action.friend_request).forEach(fr => {
        newState[fr.id] = fr;
      });
      return newState;
    case DELETE_FRIEND_REQUEST:
      delete newState[action.friend_request.id];
      return newState;
    default:
      return state;
  }
}

export default friendRequestsReducer;
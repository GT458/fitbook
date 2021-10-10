import { RECEIVE_FRIEND_REQUEST_ERRORS, RECEIVE_FRIEND_REQUEST } from "../../actions/friend_request_actions";
export const friendRequestErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FRIEND_REQUEST_ERRORS:
      return action.errors
    case RECEIVE_FRIEND_REQUEST:
      return [];
    default:
      return [];
  }
}
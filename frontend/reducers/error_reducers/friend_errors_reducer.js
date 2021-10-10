import { RECEIVE_FRIEND_ERRORS, RECEIVE_FRIEND } from "../../actions/friend_actions";
export const friendErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FRIEND_ERRORS:
      return action.errors
    case RECEIVE_FRIEND:
      return [];
    default:
      return [];
  }
}
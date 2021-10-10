import { RECEIVE_LIKE_ERRORS, RECEIVE_LIKE } from "../../actions/like_actions";
export const likeErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LIKE_ERRORS:
      return action.errors
    case RECEIVE_LIKE:
      return [];
    default:
      return [];
  }
}
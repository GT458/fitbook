import { RECEIVE_USER_ERRORS, RECEIVE_USER } from "../../actions/user_actions";

export const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    case RECEIVE_USER:
      return [];
    default:
      return [];
  }
}
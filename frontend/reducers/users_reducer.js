import { RECEIVE_USER } from "../actions/user_actions";



const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_USER:
      // debugger
      return Object.assign({}, state, {[action.user.id]: action.user})
    default:
      return state;
  }
}

export default usersReducer;
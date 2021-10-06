import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";



const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger
  switch(action.type) {
    case RECEIVE_USER:
      // debugger
      return Object.assign({}, state, {[action.user.id]: action.user})
    case 'RECEIVE_CURRENT_USER':
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_ALL_USERS:
      action.users.forEach(user => {
        newState[user.id] = user
      })
      return newState;
    default:
    return state;
  }
}

export default usersReducer;
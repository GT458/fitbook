import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";


export const modalReducer = (state = {show: false}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {show: true})
    case CLOSE_MODAL:
      return Object.assign({}, state, {show: false})
    default:
      return state;
  }
}
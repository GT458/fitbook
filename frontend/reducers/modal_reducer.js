import { OPEN_MODAL, CLOSE_MODAL, OPEN_EDIT_MODAL } from "../actions/modal_actions";


export const modalReducer = (state = {show: false, show_edit: false}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {show: true})
    case OPEN_EDIT_MODAL:
      return Object.assign({}, state, {show_edit: true})
    case CLOSE_MODAL:
      return Object.assign({}, state, {show: false, show_edit: false})
    default:
      return state;
  }
}
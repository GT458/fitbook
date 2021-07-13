import { OPEN_MODAL, CLOSE_MODAL, OPEN_EDIT_MODAL, OPEN_PROFILE_PIC_MODAL } from "../actions/modal_actions";

const _nullModal = {
  show: false,
  show_edit: false,
  show_profile_pic: false
}
export const modalReducer = (state = _nullModal, action) => {
  Object.freeze(state);

  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {show: true})
    case OPEN_EDIT_MODAL:
      return Object.assign({}, state, {show_edit: true})
    case OPEN_PROFILE_PIC_MODAL:
      return Object.assign({}, state, {show_profile_pic: true})
    case CLOSE_MODAL:
      return _nullModal
    default:
      return state;
  }
}
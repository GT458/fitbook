export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const openModal = (modalType) => ({
  type: OPEN_MODAL,
  modalType
  // added so modal can be made dynamic, used for posts + signup
})
export const openEditModal = (modalType) => ({
  type: OPEN_EDIT_MODAL,
  modalType
})
export const closeModal = (modal) => ({
  type: CLOSE_MODAL,
  modal,
})


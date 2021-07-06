export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalType) => ({
  type: OPEN_MODAL,
  modalType
  // added so modal can be made dynamic, used for posts 
})

export const closeModal = (modal) => ({
  type: CLOSE_MODAL,

})


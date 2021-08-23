export const OPEN_POST_MODAL = 'OPEN_POST_MODAL'; 
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const OPEN_PROFILE_PIC_MODAL = 'OPEN_PROFILE_PIC_MODAL';
export const OPEN_COVER_PHOTO_MODAL = 'OPEN_COVER_PHOTO_MODAL';
export const EDIT_POST_MODAL = 'EDIT_POST_MODAL';

export const openModal = (modalType) => ({
  type: OPEN_MODAL,
  modalType
  // added so modal can be made dynamic, used for posts + signup
})
export const openEditModal = (modalType) => ({
  type: OPEN_EDIT_MODAL,
  modalType
})

export const openProfilePictureModal = (modalType) => ({
  type: OPEN_PROFILE_PIC_MODAL,
  modalType
})

export const openPostModal = (modalType) => ({
  type: OPEN_POST_MODAL,
  modalType
})

export const editPostModal = modalType => ({
  type: EDIT_POST_MODAL,
  modalType,
  
})

export const closeModal = (modal) => ({
  type: CLOSE_MODAL,
  modal,
})

export const openCoverPhotoModal = (modalType) => ({
  type: OPEN_COVER_PHOTO_MODAL,
  modalType
})


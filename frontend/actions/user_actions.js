import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './session_actions';
import { fetchUser } from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})
const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const getAllUsers = () => dispatch => {
  return (
    UserAPIUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)),
    err => dispatch(receiveUserErrors(err.responseJSON)))
  )
}

export const getCurrentUser = () => (dispatch, getState) => {
  return (
    UserAPIUtil.fetchUser(getState().session.id).then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveUserErrors(err.responseJSON)))
    
  )
} 
export const updateUser = user => dispatch => {
  return (
    UserAPIUtil.updateUser(user).then((user) => {
      return dispatch(receiveUser(user))
    }, (error) => dispatch(receiveUserErrors(error.responseJSON)))
  )
}
export const getUser = userId => dispatch => { 
  
  return (
  UserAPIUtil.fetchUser(parseInt(userId)).then((user) => 
  dispatch(receiveUser(user)), (error) => dispatch(receiveUserErrors(error.responseJSON)))
)}

export const updateUserPhoto = (userId, formData) => dispatch => {
  return (
    UserAPIUtil.updateUserPhoto(userId, formData).then((user) => dispatch(receiveUser(user)), err => dispatch(receiveUserErrors(err.responseJSON)))
  )
}
import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './session_actions';
import { fetchUser } from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const getCurrentUser = () => (dispatch, getState) => {
  return (
    UserAPIUtil.fetchUser(getState().session.id).then(user => dispatch(receiveUser(user)))
    
  )
} 
export const updateUser = user => dispatch => {
  return (
    UserAPIUtil.updateUser(user).then((user) => {
      return dispatch(receiveUser(user))
    }, (error) => dispatch(receiveErrors(error)))
  )
}
export const getUser = userId => dispatch => { 
  
  return (
  UserAPIUtil.fetchUser(parseInt(userId)).then((user) => { 
    // debugger 
    return dispatch(receiveUser(user)) 
  }, (error) => dispatch(receiveErrors(error)))
)}


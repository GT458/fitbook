import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})


export const getUser = userId => dispatch => { 
  
  return (
  UserAPIUtil.fetchUser(parseInt(userId)).then((user) => { 
    // debugger 
    return dispatch(receiveUser(user)) 
  }, (error) => dispatch(receiveErrors(error)))
)}


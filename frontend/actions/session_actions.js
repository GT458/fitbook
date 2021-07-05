import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), err => dispatch(receiveErrors(err)))
)

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user), err => dispatch(err)))
)
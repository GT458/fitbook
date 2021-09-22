import * as FriendRequestAPI from '../util/friend_request_api_util';

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const RECEIVE_ALL_FRIEND_REQUESTS = 'RECEIVE_ALL_FRIEND_REQUESTS';
export const RECEIVE_FRIEND_REQUEST_ERRORS = 'RECEIVE_FRIEND_REQUEST_ERRORS';
export const DELETE_FRIEND_REQUEST = 'DELETE_FRIEND_REQUEST';


const receiveFriendRequest = friend_request => ({
  type: RECEIVE_FRIEND_REQUEST,
  friend_request
})

const receiveAllFriendRequests = friend_requests => ({
  type: RECEIVE_ALL_FRIEND_REQUESTS,
  friend_requests
})

const receiveFriendRequestErrors = errors => ({
  type: RECEIVE_FRIEND_REQUEST_ERRORS,
  errors
})
const deleteFriendRequestState = friend_request => ({
  type: DELETE_FRIEND_REQUEST,
  friend_request
})

export const fetchFriendRequest = id => dispatch => (
  FriendRequestAPI.fetchFriendRequest(id).then(
    friend_request => dispatch(receiveFriendRequest(friend_request)),
    err => dispatch(receiveFriendRequestErrors(err))
  )
)

export const fetchAllFriendRequests = () => dispatch => (
  FriendRequestAPI.fetchAllFriendRequests().then(
    friend_requests => dispatch(receiveAllFriendRequests(friend_requests)),
    err => dispatch(receiveFriendRequestErrors(err))
  )
)

export const deleteFriendRequest = id => dispatch => (
  FriendRequestAPI.deleteFriendRequest(id).then(
    friend_request => dispatch(deleteFriendRequest(friend_request)),
    err => dispatch(receiveFriendRequestErrors(err))
  )
)

export const createFriendRequest = friendRequest => dispatch => (
  FriendRequestAPI.createFriendRequest().then(
    friendRequest => dispatch(receiveFriendRequest(friendRequest)),
    err => dispatch(receiveFriendRequestErrors(err))
  )
)
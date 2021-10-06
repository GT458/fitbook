import * as FriendAPIUtil from '../util/friend_api_util'
import { getUser } from './user_actions';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';
export const DELETE_FRIEND = 'DELETE_FRIEND';

const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
})

const receiveAllFriends = friends => ({
  type: RECEIVE_ALL_FRIENDS,
  friends
})

const deleteFriendState = friend => ({
  type: DELETE_FRIEND,
  friend
})

const receiveFriendErrors = errors => ({
  type: RECEIVE_FRIEND_ERRORS,
  errors
})

export const fetchFriend = id => dispatch => (
  FriendAPIUtil.fetchFriend(id).then(
    friend => (
      dispatch(receiveFriend(friend))
    
    ),
    err => dispatch(receiveFriendErrors(err))
  )
)

export const fetchAllFriends = () => dispatch => (
  FriendAPIUtil.fetchAllFriends().then(
    friends => {
      Object.values(friends).forEach(friend => {
        //debugger;
        getUser(friend.user_id1);
      })
      dispatch(receiveAllFriends(friends))
    },
    err => dispatch(receiveFriendErrors(err))
  )
)

export const deleteFriend = id => dispatch => (
  FriendAPIUtil.deleteFriend(id).then(
    friend => dispatch(deleteFriendState(friend)),
    err => dispatch(receiveFriendErrors(err))
  )
)


export const createFriend = friend => dispatch => {
  FriendAPIUtil.createFriend(friend).then(
    friend => dispatch(receiveFriend(friend)),
    err => dispatch(receiveFriendErrors(err))
  )
}
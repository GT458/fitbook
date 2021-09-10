import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
})

const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
})

const deleteLikeState = like => ({
  type: DELETE_POST,
  like
})

export const fetchLike = likeId => dispatch => {
  return (
    LikeAPIUtil.fetchLike(likeId).then(like => dispatch(receiveLike(like)),
      err => dispatch(receiveLikeErrors(err))      
    )
  )
}
export const deleteLike = likeId => dispatch => {

  LikeAPIUtil.deleteLike(likeId).then(
    like => dispatch(deleteLikeState(like)),
    err => dispatch(receiveLikeErrors(err))
  )
}

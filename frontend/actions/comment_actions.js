import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveErrors } from './session_actions';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const DELETE_COMMENT_STATE = 'DELETE_COMMENT_STATE';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment: comment
})

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments: comments
})

export const createComment = comment => dispatch => {
  return (
    CommentAPIUtil.createComment(comment).then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err))
    )
  )
}


export const deleteComment = commentId => dispatch => {
  return (
    CommentAPIUtil.deleteComment(commentId).then(
      comment => dispatch(deleteCommentState(comment)),
      err => dispatch(receiveErrors(err))
    )
  )
}

export const deleteCommentState = comment => ({
  type: DELETE_COMMENT_STATE,
  comment
})

export const updateComment = commentId => dispatch => {
  return (
    CommentAPIUtil.updateComment(commentId).then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err))
    )
  )
}

export const fetchAllComments = () => dispatch => {
  return (
    CommentAPIUtil.fetchAllComments().then(
      comments => dispatch(receiveAllComments(comments),
      err => dispatch(receiveErrors(err)))
    )
  )
}
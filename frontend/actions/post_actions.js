import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const DELETE_POST = 'DELETE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
})

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const deletePostState = post => ({
  type: DELETE_POST,
  post
})

export const fetchPost = postId => dispatch => {
  return (
    PostAPIUtil.fetchPost(postId).then((post) => {
      return dispatch(receivePost(post))
    })
  )
}

export const createPost = post => dispatch => {
  // debugger;
  return (
    PostAPIUtil.createPost(post).then(post => {
      return dispatch(receivePost(post))
    })
  )
}

export const fetchAllPosts = () => dispatch => {
  return (
    PostAPIUtil.fetchAllPosts().then(
      (posts) => {
      return (
        dispatch(receiveAllPosts(posts))
      )
    }, err => dispatch(receivePostErrors(err)))
  )
}

export const deletePost = (postId) => dispatch => {
  return (
    PostAPIUtil.deletePost(postId).then(
      (post) => (dispatch(deletePostState(post))),
      err => dispatch(receivePostErrors(err))
    
    )
  )
}

export const editPost = post => dispatch => {
  return (
    PostAPIUtil.editPost(post).then(
      (post) => dispatch(receivePost(post)),
      err => dispatch(receivePostErrors(err))
      )
  )
}
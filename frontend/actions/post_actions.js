import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';


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

export const fetchPost = postId => dispatch => {
  return (
    PostAPIUtil.fetchPost(postId).then((post) => {
      return dispatch(receivePost(post))
    })
  )
}

export const fetchAllPosts = () => dispatch => {
  return (
    PostAPIUtil.fetchAllPosts().then((posts) => {
      // debugger;
      return (
        dispatch(receiveAllPosts(posts))
      )
    })
  )
}
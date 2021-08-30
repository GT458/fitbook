import * as CommentAPIUtil from '../../util/comment_api_util';

export const getCommentsByPostId = (postId, stateComments) => {
  let comments = [];
  stateComments.forEach(commentId => {
    if (stateComments[commentId].post_id === parseInt(postId)) {
      comments.push(stateComments[commentId])
    }
  })
}
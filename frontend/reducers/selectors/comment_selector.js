import * as CommentAPIUtil from '../../util/comment_api_util';

export const getCommentsByPostId = (postId, stateComments) => {
  let comments = [];
  // CommentAPIUtil.fetchAllComments().then(
  //   cmmnts => comments = cmmnts
  // );
  // debugger;
  for (let id in stateComments) {
    if (stateComments[id].post_id === parseInt(postId)) {
      comments.push(stateComments[id])
    }
  }
  // Object.values(stateComments).forEach(commentId => {
  //   if (stateComments[commentId].post_id === parseInt(postId)) {
  //     comments.push(stateComments[commentId])
  //   }
  // })
  return comments;
}
import * as CommentAPIUtil from '../../util/comment_api_util';

export const getCommentsByPostId = (postId, stateComments) => {
  let comments = [];
  CommentAPIUtil.fetchAllComments().then(
    cmmnts => comments = cmnts
  );
  // debugger;
  stateComments.forEach(commentId => {
    if (stateComments[commentId].post_id === parseInt(postId)) {
      comments.push(stateComments[commentId])
    }
  })
}
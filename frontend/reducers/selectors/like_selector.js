import * as LikeAPIUtil from '../../util/like_api_util';

export const getLikesByPostId = (postId, stateLikes) => {
  let likes = [];
  // CommentAPIUtil.fetchAllComments().then(
  //   cmmnts => comments = cmmnts
  // );
  // debugger;
  for (let id in stateLikes) {
    if (stateLikes[id].likeable_id === parseInt(postId)) {
      likes.push(stateLikes[id])
    }
  }
  // Object.values(stateComments).forEach(commentId => {
  //   if (stateComments[commentId].post_id === parseInt(postId)) {
  //     comments.push(stateComments[commentId])
  //   }
  // })
  return likes;
}
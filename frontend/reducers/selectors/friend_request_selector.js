import * as CommentAPIUtil from '../../util/comment_api_util';
import * as FriendRequestAPIUtil from '../../util/friend_request_api_util'
export const getRequestsSent = (userId, stateFriendRequests) => {
  let requestsSent = [];
  // CommentAPIUtil.fetchAllComments().then(
  //   cmmnts => comments = cmmnts
  // );
  // debugger;
  for (let id in stateFriendRequests) {
    if (stateFriendRequests[id].requester_id === parseInt(userId)) {
      requestsSent.push(stateFriendRequests[id])
    }
  }
  // Object.values(stateComments).forEach(commentId => {
  //   if (stateComments[commentId].post_id === parseInt(postId)) {
  //     comments.push(stateComments[commentId])
  //   }
  // })
  return requestsSent;
}
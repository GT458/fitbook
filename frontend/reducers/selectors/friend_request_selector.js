import * as CommentAPIUtil from '../../util/comment_api_util';
import * as FriendRequestAPIUtil from '../../util/friend_request_api_util'
export const getRequestsSent = (userId, stateFriendRequests) => {
  if (userId === undefined || stateFriendRequests === undefined) {
    console.log('no fr');
    return [];
  }
  let requestsSent = [];
  // CommentAPIUtil.fetchAllComments().then(
  //   cmmnts => comments = cmmnts
  // );
  // debugger;
  Object.values(stateFriendRequests).forEach(friend_request => {
    if (friend_request.requester_id === parseInt(userId)) {
      requestsSent.push(friend_request);
    }
  })
  // for (let id in stateFriendRequests) {
    
  //   if (stateFriendRequests[id].requester_id === parseInt(userId)) {
      
  //     requestsSent.push(stateFriendRequests[id])
  //   }
  // }
  // Object.values(stateComments).forEach(commentId => {
  //   if (stateComments[commentId].post_id === parseInt(postId)) {
  //     comments.push(stateComments[commentId])
  //   }
  // })
  return requestsSent;
}
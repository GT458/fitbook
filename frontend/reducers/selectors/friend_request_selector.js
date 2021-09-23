import * as CommentAPIUtil from '../../util/comment_api_util';
import * as FriendRequestAPIUtil from '../../util/friend_request_api_util'
export const getRequestsSent = (userId, stateFriendRequests) => {
  if (userId === undefined || stateFriendRequests === undefined) {
    console.log('no fr');
    return [];
  }
  let requestsSent = [];
 
  Object.values(stateFriendRequests).forEach(friend_request => {
    if (friend_request.requester_id === parseInt(userId)) {
      requestsSent.push(friend_request);
    }
  })

  return requestsSent;
}

export const getRequestsReceived = (userId, stateFriendRequests) => {
  if (userId === undefined || stateFriendRequests === undefined) {
    console.log('no fr');
    return [];
  }
  let requestsReceived = [];
 
  Object.values(stateFriendRequests).forEach(friend_request => {
    if (friend_request.requestee_id === parseInt(userId)) {
      requestsReceived.push(friend_request);
    }
  })

  return requestsReceived;
}
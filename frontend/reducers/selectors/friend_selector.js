export const getFriends = (userId, stateFriends) => {
  if (userId === undefined || stateFriends === undefined) {
    console.log('no friends');
    return [];
  }
  let friends = [];
 
  Object.values(stateFriends).forEach(friend => {
    if (friend.user_id1 === parseInt(userId)) {
      friends.push(friend_request);
    }
  })

  return friends;
}


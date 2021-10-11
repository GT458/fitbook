export const getFriends = (userId, stateFriends) => {
  if (userId === undefined || stateFriends === undefined) {
    
    return [];
  }
  let friends = [];
 
  Object.values(stateFriends).forEach(friend => {
    if (friend.user_id1 === parseInt(userId)) {
      friends.push(friend);
    } else if (friend.user_id2 === parseInt(userId)) {
      friends.push(friend)
    }
  })

  return friends;
}


export const getFriendUsers = (userId, stateFriends, stateUsers) => {
  if (userId === undefined || stateFriends === undefined) {
    
    return [];
  }
  let friends = [];
 
  Object.values(stateFriends).forEach(friend => {
    if (friend.user_id1 === parseInt(userId)) {
      friends.push(stateUsers[friend.user_id1]);
    } else if ( friend.user_id2 === parseInt(userId)) {
      friends.push(stateUsers[friend.user_id2]);
    }
  })

  return friends;
}


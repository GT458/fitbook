export const fetchAllFriends = () => (
  $.ajax({
    method: 'GET',
    url: '/api/friends'
  })
)

export const createFriend = friend => (
  $.ajax({
    method: 'POST',
    url: `/api/friends`,
    data: friend
  })
)

export const fetchFriend = friendId => (
  $.ajax({
    method: 'GET',
    url: `/api/friends/${friendId}`
  })
)

export const deleteFriend = friendId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friends/${friendId}`
  })
)
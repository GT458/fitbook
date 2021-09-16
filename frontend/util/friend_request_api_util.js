export const fetchFriendRequest = id => (
 $.ajax({
   method: 'GET',
   url: `/api/friend_requests${id}`
 })
)


export const fetchAllFriendRequests = () => (
  $.ajax({
    method: 'GET',
    url: `/api/friend_requests`
  })
)

export const createFriendRequest = friend_request => (
  $.ajax({
    method: 'POST',
    url: `/api/friend_requests`,
    data: friend_request
  })
)

export const deleteFriendRequest = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friend_requests/${id}`
  })
)
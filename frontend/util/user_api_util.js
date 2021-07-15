
export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user}
  })
)

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
)

export const updateUserPhoto = (userId, formData) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
)


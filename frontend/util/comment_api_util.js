export const fetchAllComments = () => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`
  })
)

export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
)

export const createComment = (comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: {comment}
  })
)

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
)

export const updateComment = comment => (
  $.ajax({
    method: 'PUT',
    url: `/api/comments/${comment.id}`,
    data: comment
  })
)



export const fetchAllPosts = () => (
  $.ajax({
    method: 'GET',
    url: `/api/posts`
  })
)

// export const createPost = post => (
//   $.ajax({
//     method: 'POST',
//     url: `/api/posts`,
//     data: {post: post}
//   })
// )

export const createPost = post => {
  // debugger
 return ( $.ajax({
    method: 'POST',
    url: `/api/posts`,
    data: post,
    contentType: false,
    processData: false
  }))
}

export const fetchPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
)

export const deletePost = postId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  })
)

export const editPost = post => (
  $.ajax({
    method: 'PUT',
    url: `/api/posts/${post.id}`,
    data: post,
    contentType: false,
    processData: false
  })
)
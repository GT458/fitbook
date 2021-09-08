json.array! @posts do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', post: post
    json.comments do 
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
    
  end
  end
  
  
end
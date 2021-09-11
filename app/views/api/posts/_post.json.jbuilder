
json.extract! post, :body, :author_id, :wall_id, :id, :created_at
if post.photo.attached? 
  json.photo url_for(post.photo)

end

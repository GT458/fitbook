json.array! @likes do |like|
  json.set! post.id do
    json.partial! 'api/likes/like', like: like
  end
end

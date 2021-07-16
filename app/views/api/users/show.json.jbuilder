
  json.partial! 'api/users/user', user: @user
  if @user.profile_photo.attached?
    json.profile_photo url_for(@user.profile_photo)
  else
    json.profile_photo 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM='
  end

if @user.cover_photo.attached?
  json.cover_photo url_for(@user.cover_photo)
else
  json.cover_photo 'https://www.wallpapertip.com/wmimgs/31-316042_mountain-nature-photo-hd-mountain-nature-image-mountain.jpg'
end

  json.partial! 'api/users/user', user: @user
  if @user.profile_photo.attached?
    json.profile_photo url_for(@user.profile_photo)
  else
    json.profile_photo image_url('boba.jpeg')
  end

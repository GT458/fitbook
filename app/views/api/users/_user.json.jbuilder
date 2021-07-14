json.extract! user, :email, :fname, :lname, :profile_photo_url, :cover_photo_url, :birthday, :gender, :school, :city, :work, :bio, :id, :profile_photo
if user.profile_photo.attached?
    json.profile_photo url_for(user.profile_photo)
  else
    json.profile_photo image_url('boba.jpeg')
  end

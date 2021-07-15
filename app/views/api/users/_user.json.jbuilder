json.extract! user, :email, :fname, :lname, :profile_photo_url, :cover_photo_url, :birthday, :gender, :school, :city, :work, :bio, :id, :profile_photo
if user.profile_photo.attached?
    json.profile_photo url_for(user.profile_photo)
  else
    json.profile_photo 'https://images.unsplash.com/photo-1543466835-00a7907e9de1'
  end

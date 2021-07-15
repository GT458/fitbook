json.extract! user, :email, :fname, :lname, :profile_photo_url, :cover_photo_url, :birthday, :gender, :school, :city, :work, :bio, :id, :profile_photo, :cover_photo
if user.profile_photo.attached?
    json.profile_photo url_for(user.profile_photo)
  else
    json.profile_photo 'https://images.unsplash.com/photo-1543466835-00a7907e9de1'
  end

if user.cover_photo.attached?
  json.cover_photo url_for(user.cover_photo)
else
  json.cover_photo 'https://www.denofgeek.com/wp-content/uploads/2019/11/Attack-on-Titan-Season-4-Release-Date-Trailer-News.jpg?resize=768%2C432'
end

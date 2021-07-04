json.array! @users do |user|
  
  json.user do
    json.fname user.fname
    json.lname user.lname
  end
end
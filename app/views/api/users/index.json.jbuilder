json.array! @users do |user|
  
  json.user do
    json.partial! 'api/users/user', user: user
  end
end
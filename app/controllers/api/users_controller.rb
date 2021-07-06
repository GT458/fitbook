class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render 'api/users/index'
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :profile_photo_url, :cover_photo_url, :birthday, :gender, :school, :city, :work, :bio, :password)
  end
end

class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render 'api/users/index'
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user 
      render 'api/users/show'
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    print(params[:id])
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: ['Failed to update user'], status: 418
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :profile_photo_url, :cover_photo_url, :birthday, :gender, :school, :city, :work, :bio, :password)
  end
end

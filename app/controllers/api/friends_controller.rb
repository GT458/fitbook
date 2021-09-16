class Api::FriendsController < ApplicationController

  def index
    @friendships = Friend.all
    render 'api/friends/index'
  end


  def show
    @friendship = Friend.find_by(id: params[:id])
    if @friendship
      render 'api/friends/show'
    else
      render json: ['Unable to locate friendship'], status: 404
    end
  end

  def create
    @friendship = Friend.new(friend_params)
    if @friendship.save
      render 'api/friends/show'
    else
      render json: @friendship.errors.full_messages, status: 404
    end
  end

  def destroy
    @friendship = Friend.find_by(id: params[:id])
    if @friendship
      @friendship.destroy
      render :show
    else
      render json: ['Unable to locate friendship'], status: 404
    end
  end

  def friend_params
    params.require(:friend).permit(:user_id1, :user_id2)
  end

end
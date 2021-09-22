class Api::FriendRequestsController < ApplicationController
  def index
    @friend_requests = FriendRequest.all
    render 'api/friend_requests/index'
  end


  def show
    @friend_request = FriendRequest.find_by(id: params[:id])
    if @friend_request
      render 'api/friend_requests/show'
    else
      render json: ['Unable to locate friend request'], status: 404
    end
  end

  def create
    @friend_request = FriendRequest.new(friend_request_params)
    if @friend_request.save
      render 'api/friend_requests/show'
    else
      render json: @friend_request.errors.full_messages, status: 404
    end
  end

  def destroy
    @friend_request = FriendRequest.find_by(id: params[:id])
    if @friend_request
      @friend_request.destroy
      render :show
    else
      render json: ['Unable to locate friend request'], status: 404
    end
  end

  def friend_request_params
    params.require(:friend_request).permit(:requester_id, :requestee_id)
  end

end
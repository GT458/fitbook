class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render 'api/likes/index'
  end

  def show
    @like = Like.find_by(id: params[:id])
    if @like
      render 'api/likes/show'
    else
      render json: ['Unable to locate like'], status: 404
    end
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render 'api/likes/show'
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    if @like
      @like.destroy
      render :show
    else
      render json: ['Unable to locate like'], status: 404
    end
  end

  def like_params
    params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
  end
end
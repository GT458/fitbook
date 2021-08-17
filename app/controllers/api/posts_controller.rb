class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render 'api/posts/index'
  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post
      render 'api/posts/show'
    else
      render json: ['Post not found'], status: 404
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render 'api/posts/show'
    else
      render json: ['Post failed to update'], status: 402
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: ['Unable to locate post'], status: 404
    end
  end

  def post_params
    params.require(:post).permit(:body, :author_id, :wall_id, :photo)
  end
end
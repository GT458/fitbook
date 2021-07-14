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

  end

  def post_params
    params.require(:post).permit(:body, :author_id, :wall_id)
  end
end
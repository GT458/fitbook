class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render 'api/comments/index'
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
      render 'api/comments/show'
    else
      render json: ['Comment not found'], status: 404
    end
  end

  def update
    @comment = Comment.find_by(id: params[:comment][:id])
    print(@comment)
    if @comment.update(comment_params)
      render 'api/comments/show'
    else
      render json: ['Comment failed to update'], status: 402
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment
      @comment.destroy
      render :show
    else
      render json: ['Unable to locate comment'], status: 404
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id)
  end
end
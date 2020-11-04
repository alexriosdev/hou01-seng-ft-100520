class PostsController < ApplicationController

  before_action :find_post, only: [:show,:edit,:update,:like_post]

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(posts_params)
    @post.likes = 0
    @post.save
    redirect_to "/posts/#{@post.id}"
  end

  def show
  end

  def edit
  end

  def update
    if posts_params
      @post.update(posts_params)
      redirect_to "/posts/#{@post.id}"
    else
      @post.likes += 1
      @post.save
      redirect_to "/posts/#{@post.id}"
    end
  end

  # def like_post
  #   @post.likes += 1
  #   @post.save
  #   redirect_to "/posts/#{@post.id}"
  # end

  private
  def posts_params
    begin
      params.require(:post).permit(:title,:content,:likes,:blogger_id,:destination_id)
    rescue ActionController::ParameterMissing
      nil
    end
  end

  def find_post
    @post = Post.find_by(id: params[:id])
  end

end

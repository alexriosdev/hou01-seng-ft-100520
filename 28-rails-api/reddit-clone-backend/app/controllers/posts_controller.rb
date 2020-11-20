class PostsController < ApplicationController

  def index
    @posts = Post.all
    render :json => { :posts => @posts, :trending => Post.popular_posts }, :status => :ok
  end

end

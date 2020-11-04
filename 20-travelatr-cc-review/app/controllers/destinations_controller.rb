class DestinationsController < ApplicationController

  def index
    @destinations = Destination.all
  end

  def show
    @destination = Destination.find_by(id: params[:id])
    @posts = @destination.posts.sort { |post| post.created_at }
    @featured_post = @destination.featured_post

    @average_age = @destination.average_age

    if @posts.length > 5
      @recent_five = @posts.slice(0,5)
    else
      @recent_five = @posts
    end

  end

end

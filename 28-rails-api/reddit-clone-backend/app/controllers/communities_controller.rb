class CommunitiesController < ApplicationController

  def index
    @communities = Community.all
    render :json => @communities.as_json(include: :users), :status => :ok
  end

end

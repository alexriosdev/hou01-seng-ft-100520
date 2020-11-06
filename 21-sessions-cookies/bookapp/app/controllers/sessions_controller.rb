class SessionsController < ApplicationController

  def new
  end

  def create
    @author = Author.find_by(name: params[:name])

    if @author && @author.password == params[:password]
      session[:author_id] = @author.id
      redirect_to books_path
    else
      flash[:errors] = ["Login failed.. Try Again!!"]
      redirect_to new_session_path
    end
  end

end

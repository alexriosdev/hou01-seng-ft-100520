require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    @books
    erb :hello_world
  end

  get "/books" do
    @books = Book.all
    erb :index
  end

  # get "/" do
  #   "<h1> Hello World </h1>"
  # end
  #
  # get "/home" do
  #   "<h1> Welcome to the home!! </h1>"
  # end

end

class AuthorsController < Sinatra::Base

    configure do
      set :public_folder, 'public'
      set :views, 'app/views/authors'
      set :method_override, true
    end

    # index
    # GET "/authors"
    # List of all authors
    get "/authors" do
      @authors = Author.all
      erb :index
    end

    # new
    # GET "/author/new"
    # A form to create a new author
    get "/author/new" do
      erb :new
    end
    #
    # # create
    # # POST "/authors"
    # # Persists the author that we submitted
    post "/authors" do
      @author = Author.create(
        name: params[:name],
        bio: params[:bio]
      )
      redirect "/authors"
    end
    #
    # # show
    # # GET "/authors/:id"
    # # Shows a specific author
    # get "/authors/:id" do
    #   @author = Author.find_by(id: params[:id])
    #   erb :show
    # end
    #
    # # edit
    # # GET "/authors/:id/edit"
    # # A form to edit a author
    # get "/authors/:id/edit" do
    #   @books = Book.all
    #   @author = Author.find_by(id: params[:id])
    #   erb :edit
    # end
    #
    # # update
    # # PATCH "/authors/:id"
    # # Persist the change we made on a author instance
    # patch "/authors/:id" do
    #   @author = Author.find_by(id: params[:id])
    #   @author.update(
    #     title: params[:title],
    #     author_id: params[:author_id]
    #   )
    #   redirect "/authors/#{@author.id}"
    # end
    #
    # # delete
    # # DELETE "/authors/:id"
    # # Delete a author
    # delete "/authors/:id" do
    #   @author = Author.find_by(id: params[:id])
    #   @author.destroy
    #   redirect "/authors"
    # end
    #



end

class BooksController < Sinatra::Base

    configure do
      set :public_folder, 'public'
      set :views, 'app/views/books'
      set :method_override, true
    end

    # index
    # GET "/books"
    # List of all books
    get "/books" do
      @books = Book.all
      erb :index
    end

    # new
    # GET "/book/new"
    # A form to create a new book
    get "/book/new" do
      @authors = Author.all
      erb :new
    end

    # create
    # POST "/books"
    # Persists the book that we submitted
    post "/books" do
      @book = Book.create(
        title: params[:title],
        author_id: params[:author_id]
      )
      redirect "/books"
    end

    # show
    # GET "/books/:id"
    # Shows a specific book
    get "/books/:id" do
      @book = Book.find_by(id: params[:id])
      erb :show
    end

    # edit
    # GET "/books/:id/edit"
    # A form to edit a book
    get "/books/:id/edit" do
      @authors = Author.all
      @book = Book.find_by(id: params[:id])
      erb :edit
    end

    # update
    # PATCH "/books/:id"
    # Persist the change we made on a book instance
    patch "/books/:id" do
      @book = Book.find_by(id: params[:id])
      @book.update(
        title: params[:title],
        author_id: params[:author_id]
      )
      redirect "/books/#{@book.id}"
    end

    # delete
    # DELETE "/books/:id"
    # Delete a book
    delete "/books/:id" do
      @book = Book.find_by(id: params[:id])
      @book.destroy
      redirect "/books"
    end




end

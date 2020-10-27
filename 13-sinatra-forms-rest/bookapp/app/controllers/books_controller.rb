class BooksController < ApplicationController

    configure do
      set :views, 'app/views/books'
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
      erb :new
    end

    # create
    # POST "/books"
    # Persists the book that we submitted
    post "/books" do
      @book = Book.create(
        title: params[:title],
        author_name: params[:author_name]
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



end

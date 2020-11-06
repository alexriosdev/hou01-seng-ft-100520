class BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(books_params)

    if current_author
      @book.author_id = current_author.id
      @book.save
      redirect_to books_path
    else
      flash[:errors] = ["Book creation failed. Check logs.."]
      redirect_to new_book_path
    end
  end

  def edit
    @book = Book.find_by(id: params[:id])
  end

  def update
    @book = Book.find_by(id: params[:id])
    @book.update(books_params)
    # redirect_to "/books/#{@book.id}"
    redirect_to book_path(@book)
  end

  def show
    @book = Book.find_by(id: params[:id])
  end

  def destroy
  end

  private
  def books_params
    params.require(:book).permit(:title,:img_url,:author_id)
  end


end

class AuthorsController < ApplicationController

   before_action :find_author, only: [:show,:edit,:update,:destroy]

   def index
     @authors = Author.all
   end

   def new
     @author = Author.new
   end

   def create
     @author = Author.create(author_params)
     redirect_to authors_path
   end

   def show
     if @author
       render :show
     else
       redirect_to authors_path
     end
   end

   def edit
   end

   def update
     byebug
     @author.update(author_params)
     redirect_to authors_path
   end

   def destroy
     @author.destroy
     redirect_to authors_path
   end

   private
   def author_params
     params.require(:author).permit(:name,:bio)
   end

   def find_author
     @author = Author.find_by(id: params[:id])
   end

end

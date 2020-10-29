class AuthorsController < ApplicationController

   def index
     @authors = Author.all
     render :index
   end

   def new
   end
   # create
   # show
   # edit
   # update
   # destroy

end

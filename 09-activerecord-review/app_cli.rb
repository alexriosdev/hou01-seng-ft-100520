require_relative './config/environment'

class AppCLI

  def welcome_message
    puts " "
    puts "Welcome to Amazon Books Clone 🤔!"
    puts " "
  end

  def list_books
    puts "=========== List of Books ========="

    Book.all.each_with_index do |book,index|
        puts "#{book.id}: #{book.title} by #{book.author.username}"
    end

    puts "=========== end ========="

    delete_a_book
  end

  def delete_a_book
    puts "Select the id of the book that you wanna delete:"
    book_id = gets.chomp
    @book = Book.find_by(id: book_id)
    @book.destroy

    list_books
  end

  def run
    welcome_message
    list_books
  end

end

AppCLI.new.run

require 'pry'
require 'rest-client'
require 'json'

def welcome_user
  puts "Welcome to my Amazon Clone 🛑"
end

def ask_for_input
  puts "Search for books related to:"
  gets.chomp
end

def look_for_books(search_term)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
  response = RestClient.get(url)
  parsed_json = JSON.parse(response)
  parsed_json["items"]
end

def print_titles(books)
  books.each_with_index do |book,index|
    # puts "#{index+1}: #{book["volumeInfo"]["title"]} by #{book["volumeInfo"]["authors"][0]} "
    author = Author.create(username: book["volumeInfo"]["authors"][0])
    Book.create(title: book["volumeInfo"]["title"], author_id: author.id )
  end
end

def run
  welcome_user
  search_term = ask_for_input
  books = look_for_books(search_term)
  print_titles(books)
end

run

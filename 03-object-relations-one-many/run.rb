require 'pry'
require_relative './user'
require_relative './tweet'

steven = User.new('Steven')
david = User.new('David')

t1 = steven.post_tweet('This class it too long 🤯')
t2 = steven.post_tweet('okay just quit it now')

t3 = david.post_tweet('😭')

binding.pry

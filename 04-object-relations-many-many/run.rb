require 'pry'

require_relative './user'
require_relative './tweet'
require_relative './like'

steven = User.new('Steven')
david = User.new('David')
shivang = User.new('Shivang')

t1 = steven.post_tweet('This class it too long 🤯')
t2 = steven.post_tweet('okay just quit it now')
t3 = steven.post_tweet('okay just quit it now')

t4 = david.post_tweet('😭')

shivang.like_tweet(t2)
david.like_tweet(t2)
shivang.like_tweet(t4)

david.liked_tweets
t2.likers


binding.pry

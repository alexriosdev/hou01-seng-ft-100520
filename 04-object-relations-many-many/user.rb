class User

  attr_reader :username
  # attr_accessor :tweets

  def initialize(username)
    @username = username
  end


  def like_tweet(tweet)
    like = Like.new(self,tweet)
  end

  def liked_tweets
    Like.all.select do |like|
      like.user == self
    end
  end

  #####

  def post_tweet(message)
    tweet = Tweet.new(message,self)
    # self.tweets << tweet
    tweet
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

end

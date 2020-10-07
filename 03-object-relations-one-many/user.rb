class User

  attr_reader :username
  attr_accessor :tweets

  def initialize(username)
    @username = username
    @tweets = []
  end

  def post_tweet(message)
    tweet = Tweet.new(message,self)
    self.tweets << tweet
    tweet
  end

end

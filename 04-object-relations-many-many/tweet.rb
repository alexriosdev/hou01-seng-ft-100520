class Tweet

  attr_reader :message
  attr_accessor :user
  # self => Tweet
  @@all = []

  def initialize(message,user)
    @message = message
    @user = user

    @@all << self
  end

  def likers

    likes = Like.all.select do |like|
      like.tweet == self
    end

    likes.map do |like|
      like.user.username
    end

  end

  def username
    self.user.username
  end

  def self.all
    @@all
  end

  # def user
  #   @user
  # end

end

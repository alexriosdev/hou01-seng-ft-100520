class Tweet

  attr_reader :message
  attr_accessor :user
  @@all = []

  def initialize(message,user)
    @message = message
    @user = user

    @@all << self
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

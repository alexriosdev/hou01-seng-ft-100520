class Cult

  attr_reader :name, :location, :founding_year, :slogan
  @@all = []

  def initialize(name,location,founding_year,slogan)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan

    @@all << self
  end

  def average_age
    @oaths = BloodOath.all.select { |oath| oath.cult == self }
    @ages = @oaths.map { |oath| oath.follower.age }
    @ages.sum / @ages.length
  end

  def my_followers_mottos
    @oaths = BloodOath.all.select { |oath| oath.cult == self }
    @mottos = @oaths.map { |oath| oath.follower.life_motto }
    puts @mottos
  end

  def self.least_popular
    # @num_of_followers = self.all.map { |cult| cult.cult_population }
    self.all.min_by { |cult| cult.cult_population }
  end

  def recruit_follower(follower)
    @new_oath = BloodOath.new(follower,self,'1889-10-12')
  end

  def cult_population
    BloodOath.all.select { |oath| oath.cult == self }.length
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    self.all.find { |cult| cult.name == name }
  end

  def self.find_by_location(location)
    self.all.select { |cult| cult.location == location }
  end

  def self.find_by_founding_year(year)
    self.all.select { |cult| cult.founding_year == year }
  end

end

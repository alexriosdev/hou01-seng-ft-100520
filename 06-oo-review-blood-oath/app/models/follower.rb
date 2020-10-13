class Follower

  attr_reader :name, :age, :life_motto
  @@all = []

  def initialize(name,age,life_motto)
    @name = name
    @age = age
    @life_motto = life_motto

    @@all << self
  end

  def cults
    oaths = BloodOath.all.select { |oath| oath.follower == self }
    oaths.map { |oath| oath.cult }
  end

  def join_cult(cult)
    @new_oath = BloodOath.new(self,cult,'1889-10-12')
  end

  def self.all
    @@all
  end

  def self.of_a_certain_age(age)
    self.all.select { |follower| follower.age >= age }
  end

end

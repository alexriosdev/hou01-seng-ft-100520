require 'pry'

class Person

  attr_accessor :name

  def initialize(name)

    # Q1 - What is self pointing to here?
      # Why?
    @name = name
    binding.pry
  end

  def print_name
    # Q2 - What is self pointing to here?
      # Why?
    puts "self is: #{self}"
    puts "#{self.name}"
  end

  # Q3 - What is self pointing to here?
    # Why?
  def self.say_something
    puts "self is: #{self}"
  end

end


andy = Person.new('andy')
wintana = Person.new('Wintana')
andy.print_name
# puts andy.name
Person.say_something

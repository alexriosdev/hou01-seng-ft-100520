require 'pry'

class Account

  attr_reader :name
  attr_accessor :balance
  @@all = []

  def initialize(name,balance,id)
    @name = name
    @balance = balance
    @id = id
    @@all << self
  end

  def print_balance
    puts "#{self.name} has balance of #{self.balance}"
  end

  def deposit(amount)
    self.balance += amount
    return "Remaining balance is #{self.balance}"
  end

  def withdraw(amount)
    self.balance -= amount
    return "Remaining balance is #{self.balance}"
  end

  def self.all
    @@all
  end

end

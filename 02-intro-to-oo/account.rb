require 'pry'

class Account

  attr_reader :name, :type
  attr_accessor :balance

  def initialize(name,balance,type)
    @name = name
    @balance = balance
    @type = type
  end

  # def name
  #   @name
  # end

end

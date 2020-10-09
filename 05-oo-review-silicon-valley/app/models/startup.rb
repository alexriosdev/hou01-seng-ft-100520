class Startup

  attr_reader :name, :founder, :domain
  @@all = []

  def initialize(name,founder,domain)
    @name = name
    @founder = founder
    @domain = domain

    @@all << self
  end

  def sign_contract(vc,type,investment)
    new_round = FundingRound.new(self,vc,type,investment)
  end

  def rounds
    FundingRound.all.select { |round| round.startup == self }
  end

  def num_funding_rounds
    self.rounds.length
  end

  def total_funds
    self.rounds.map { |r| r.investment }.sum
  end

  def investors
    self.rounds.map { |r| r.venture_capitalist }.uniq
  end

  def big_investors
    self.investors.select { |vc| vc.total_worth > 1000000000 }
    # VentureCapitalist.tres_commas_club.include?(self.investors)
  end

  def pivot(domain,name)
    @name = name
    @domain = domain
  end

  def self.all
    @@all
  end

  def self.find_by_founder(name)
    self.all.find { |startup| startup.founder == name }
  end

  def self.domains
    self.all.map { |startup| startup.domain }.uniq
  end

end

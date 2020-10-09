class VentureCapitalist

  attr_reader :name, :total_worth
  @@all = []

  def initialize(name,total_worth)
    @name = name
    @total_worth = total_worth

    @@all << self
  end

  def offer_contract(startup,type,investment)
    new_round = FundingRound.new(startup,self,type,investment)
  end

  def funding_rounds
    FundingRound.all.select { |round| round.venture_capitalist == self }
  end

  def portfolio
    self.funding_rounds.map { |round| round.startup }.uniq
  end

  def biggest_investment
    amount = self.funding_rounds.map { |r| r.investment }.max
    self.funding_rounds.find { |round| round.investment == amount }
    # self.funding_rounds.max { |a, b| a.investment <=> b.investment }
  end

  def invested(domain)
    rounds = self.funding_rounds.select { |r| r.startup.domain == domain }
    rounds.map { |r| r.investment }.sum
  end


  def self.all
    @@all
  end

  def self.tres_commas_club
    self.all.select do |vc|
      vc.total_worth > 1000000000
    end
  end

end

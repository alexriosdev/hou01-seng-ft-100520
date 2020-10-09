require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

startup_one = Startup.new('Facebook','zuck','tech')
startup_two = Startup.new('Snapchat','def not zuck','tech')
startup_three = Startup.new('Airbnb','no idea','travel')
startup_four = Startup.new('SpaceX','Elon','Space Force')

vc1 = VentureCapitalist.new('Shivang',200000)
vc2 = VentureCapitalist.new('Alex',50000000000000000)
vc3 = VentureCapitalist.new('Ariel',1000000000000000000)

round1 = FundingRound.new(startup_three,vc1,'Angel',5)
round2 = FundingRound.new(startup_four,vc3,'Angel',500000000)

startup_one.sign_contract(vc2,'Seed',2000000)
startup_one.sign_contract(vc2,'Seed',4000000)
startup_one.sign_contract(vc3,'Angel',2000000)

# puts startup_one.num_funding_rounds
# puts startup_two.num_funding_rounds
# puts startup_three.num_funding_rounds
# puts startup_four.num_funding_rounds

vc2.offer_contract(startup_two,'Seed',1000)
# puts startup_one.big_investors
vc2.invested("tech")

binding.pry
0 #leave this here to ensure binding.pry isn't the last line

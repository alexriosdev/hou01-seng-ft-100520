require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

c1 = Cult.new('Coders','H-town',2020,'coders rule')
c2 = Cult.new('!Coders','H-town',2000,'we rule too.')
c3 = Cult.new('K-pop','In a galaxy far far away',1973,'we dont care..')

f1 = Follower.new('Shivang',12,'It feels like a monday.')
f2 = Follower.new('Goku',102,'Wheres da food?')
f3 = Follower.new('Freeza',1000,'Damn no invite.')

c1.recruit_follower(f1)
c2.recruit_follower(f3)
c2.recruit_follower(f1)

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits

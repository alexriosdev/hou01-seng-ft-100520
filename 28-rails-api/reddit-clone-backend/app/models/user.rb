class User < ApplicationRecord

  has_many :community_users
  has_many :communities, through: :community_users

  has_many :posts

  validates :username, { :presence => true, :uniqueness => true }

end

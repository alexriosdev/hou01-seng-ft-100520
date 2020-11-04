class Blogger < ApplicationRecord
  has_many :posts
  has_many :destinations, through: :posts

  validates :name, { uniqueness: true }
  validates :age, numericality: { greater_than: 0 }
  validates :bio, length: { minimum: 30,
    too_short: "%{count} characters is the minimum requirement" }
end

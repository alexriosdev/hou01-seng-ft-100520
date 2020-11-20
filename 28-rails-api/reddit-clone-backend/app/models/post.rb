class Post < ApplicationRecord
  belongs_to :user
  belongs_to :community

  def self.popular_posts

  end
end

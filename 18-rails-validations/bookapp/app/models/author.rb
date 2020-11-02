class Author < ApplicationRecord
  has_many :books, dependent: :destroy

  validates :name, { presence: true, uniqueness: true }
  validates :bio, presence: true

  # validate :validate_name_length

  # def validate_name_length
  #   if self.name.length < 3
  #     errors.add(:name,"is too short")
  #   end
  # end

end

class Journey < ApplicationRecord
  belongs_to :user, optional: true

  has_one_attached :image

  validates :level, numericality: {less_than: 10}
end

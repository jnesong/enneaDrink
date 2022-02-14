class Journey < ApplicationRecord
  belongs_to :user, optional: true

  has_one_attached :file

  validates :level, numericality: {less_than: 10}
end

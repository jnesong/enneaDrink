class Journey < ApplicationRecord
  belongs_to :user, optional: true

  validates :level, numericality: {less_than: 10}
end

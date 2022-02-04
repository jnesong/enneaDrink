class JourneySerializer < ActiveModel::Serializer
  attributes :id, :date, :drink, :level, :entry
  has_one :user
end

class JourneySerializer < ActiveModel::Serializer
  attributes :id, :date, :drink, :level, :entry, :file
  # has_one :user

end

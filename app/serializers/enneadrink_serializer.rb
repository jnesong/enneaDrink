class EnneadrinkSerializer < ActiveModel::Serializer
  attributes :id, :drink, :title, :emoji, :about, :strengths, :weaknesses
  has_many :healths
  has_many :practices
end

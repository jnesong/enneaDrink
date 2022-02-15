class JourneySerializer < ActiveModel::Serializer
  attributes :id, :date, :drink, :level, :entry, :image
  # has_one :user

  # def file
  #   rails_blob_path(object.file, only_path:true) if object.file.attached?
  # end

end

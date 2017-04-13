class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :external_url, :longitude, :latitude, :active
  has_one :user
  has_one :css_style
end

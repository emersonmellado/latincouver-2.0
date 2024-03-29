class PlazaSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :short_description, :image_url, :longitude, :latitude, :active
  has_one :user
  has_one :css_style
end

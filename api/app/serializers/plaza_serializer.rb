class PlazaSerializer < BaseSerializer
  attributes :id, :event_id, :css_style_id, :name, :description, :image_url, :longitude, :latitude, :active
  #has_one :user
  has_one :css_style
  has_one :event
end

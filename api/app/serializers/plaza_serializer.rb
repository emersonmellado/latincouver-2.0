class PlazaSerializer < BaseSerializer
  attributes :id, :event_id, :css_style_id, :name, :description, :image_url, :longitude, :latitude, :active
  #has_one :user
  belongs_to :css_style
  has_one :event

  attributes :css_style
end

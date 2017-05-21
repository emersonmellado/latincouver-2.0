class JsonSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :external_url, :longitude, :latitude, :active, :css_style_id
  #Relations, just to return a list of all required to load
  attributes :css_style, :plazas, :schedules, :trades

end
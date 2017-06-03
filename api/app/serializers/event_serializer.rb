class EventSerializer < ActiveModel::Serializer
#class EventSerializer < BaseSerializer
  attributes :id, :name, :short_description, :description, :image_url, :external_url, :longitude, :latitude, :active, :css_style_id, :order

  belongs_to :css_style
  has_many :schedules
  has_many :plazas
  has_many :trades

end

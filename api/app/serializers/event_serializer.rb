class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :external_url, :longitude, :latitude, :active
  #Relations, just to return a list of all required to load
  attributes :css_style, :plazas, :schedules, :trades

  #belongs_to :user
  # belongs_to :user do
    #link(:related) { user_url(object.user.id)}
  # end
  # belongs_to :css_style
  # has_many :schedules
  # has_many :plazas
  # has_many :trades

  #link(:self) { event_url(object.id) }
end

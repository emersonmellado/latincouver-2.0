class CssStyleSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :events
  has_many :plazas
  has_many :trades
  has_many :schedules



end

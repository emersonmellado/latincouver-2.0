class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :from, :to
  has_one :trade
  has_one :event
  has_one :plaza
  has_one :css_style
end

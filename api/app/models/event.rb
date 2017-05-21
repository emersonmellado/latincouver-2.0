class Event < ApplicationRecord
  #belongs_to :user
  belongs_to :css_style
  has_many :schedules
  has_many :plazas
  has_many :trades


end

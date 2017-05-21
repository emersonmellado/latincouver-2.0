class Schedule < ApplicationRecord
  belongs_to :trade
  belongs_to :event
  belongs_to :plaza
  belongs_to :css_style
end

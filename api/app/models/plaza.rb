class Plaza < ApplicationRecord
  #belongs_to :user
  belongs_to :css_style
  belongs_to :event
  has_many :trades

end

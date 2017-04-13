class Plaza < ApplicationRecord
  belongs_to :user
  belongs_to :css_style
end

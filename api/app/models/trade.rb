class Trade < ApplicationRecord
  #belongs_to :user
  belongs_to :trade_type
  belongs_to :trade_group
  belongs_to :event
  belongs_to :plaza
  belongs_to :css_style
  has_many :trade_products
  has_many :trade_links
  
end

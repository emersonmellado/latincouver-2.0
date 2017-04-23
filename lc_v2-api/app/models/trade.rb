class Trade < ApplicationRecord
  belongs_to :trade_type
  belongs_to :trade_group
  belongs_to :event
  belongs_to :plaza
  has_many :trade_products
  has_many :trade_links
  
end

class Trade < ApplicationRecord
  belongs_to :trade_type
  belongs_to :trade_group
end

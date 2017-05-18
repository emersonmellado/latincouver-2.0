class TradeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :short_description, :order, :image_url, :active
  has_one :trade_type
  has_one :trade_group
  has_many :trade_product
  has_many :trade_link
end

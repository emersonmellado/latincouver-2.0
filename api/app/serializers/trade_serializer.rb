class TradeSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :plaza_id, :trade_type_id, :trade_group_id, :name, :description, :short_description, :order, :image_url, :active
  # has_one :trade_type
  # has_one :trade_group
  # has_many :trade_products
  # has_many :trade_links
end

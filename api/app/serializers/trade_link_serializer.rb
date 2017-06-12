class TradeLinkSerializer < ActiveModel::Serializer
  attributes :id, :trade_id, :name, :href, :active, :trade
end

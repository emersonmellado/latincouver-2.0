class AddEventRefToTrades < ActiveRecord::Migration[5.0]
  def change
    add_reference :trades, :event, foreign_key: true
  end
end

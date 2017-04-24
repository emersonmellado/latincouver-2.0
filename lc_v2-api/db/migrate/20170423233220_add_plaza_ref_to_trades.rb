class AddPlazaRefToTrades < ActiveRecord::Migration[5.0]
  def change
    add_reference :trades, :plaza, foreign_key: true
  end
end

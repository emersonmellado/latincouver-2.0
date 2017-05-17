class AddUserRefToTrades < ActiveRecord::Migration[5.0]
  def change
    add_reference :trades, :user, foreign_key: true
  end
end

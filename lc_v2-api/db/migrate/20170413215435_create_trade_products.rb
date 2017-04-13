class CreateTradeProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :trade_products do |t|
      t.string :name
      t.boolean :active
      t.references :trade, foreign_key: true

      t.timestamps
    end
  end
end

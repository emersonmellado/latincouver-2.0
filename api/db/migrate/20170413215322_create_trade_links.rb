class CreateTradeLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :trade_links do |t|
      t.string :name
      t.string :href
      t.boolean :active
      t.string :icon
      t.references :trade, foreign_key: true

      t.timestamps
    end
  end
end

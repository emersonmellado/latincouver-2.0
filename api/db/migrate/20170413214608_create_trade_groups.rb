class CreateTradeGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :trade_groups do |t|
      t.string :name
      t.boolean :active

      t.timestamps
    end
  end
end

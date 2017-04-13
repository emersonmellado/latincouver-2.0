class CreateTrades < ActiveRecord::Migration[5.0]
  def change
    create_table :trades do |t|
      t.string :name
      t.text :description
      t.text :short_description
      t.string :order
      t.string :image_url
      t.boolean :active
      t.references :trade_type, foreign_key: true
      t.references :trade_group, foreign_key: true

      t.timestamps
    end
  end
end

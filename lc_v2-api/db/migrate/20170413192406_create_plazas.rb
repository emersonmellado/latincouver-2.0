class CreatePlazas < ActiveRecord::Migration[5.0]
  def change
    create_table :plazas do |t|
      t.string :name
      t.text :description
      t.string :image_url
      t.string :longitude
      t.string :latitude
      t.boolean :active
      t.references :user, foreign_key: true
      t.references :css_style, foreign_key: true

      t.timestamps
    end
  end
end

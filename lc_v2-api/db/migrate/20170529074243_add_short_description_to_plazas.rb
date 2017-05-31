class AddShortDescriptionToPlazas < ActiveRecord::Migration[5.0]
  def change
    add_column :plazas, :short_description, :string
  end
end

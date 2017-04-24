class AddEventRefToPlazas < ActiveRecord::Migration[5.0]
  def change
    add_reference :plazas, :event, foreign_key: true
  end
end

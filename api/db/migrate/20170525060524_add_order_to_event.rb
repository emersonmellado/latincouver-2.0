class AddOrderToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :order, :integer
  end
end

class CreateSchedules < ActiveRecord::Migration[5.0]
  def change
    create_table :schedules do |t|
      t.datetime :from
      t.datetime :to
      t.references :trade, foreign_key: true
      t.references :event, foreign_key: true
      t.references :plaza, foreign_key: true
      t.references :css_style, foreign_key: true

      t.timestamps
    end
  end
end

class AddCssStylesRefToTrades < ActiveRecord::Migration[5.0]
  def change
    add_reference :trades, :css_styles, foreign_key: true
  end
end

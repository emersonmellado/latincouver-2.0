class SettingSerializer < ActiveModel::Serializer
  attributes :id, :main_title, :css_style_id
  belongs_to :css_style
end

class JsonSerializer < BaseSerializer
  attributes :id, :name, :short_description, :description, :image_url, :external_url, :longitude, :latitude, :active

  #Relations, just to return a list of all required to load
  attributes :css_style, :plazas, :schedules, :trades
  #, :settingss
  # attributes :setting, serializer: SettingSerializer
end
